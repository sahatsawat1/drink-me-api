'use strict'

const Database = use('Database')
const Hash = use('Hash')
const Validator = use('Validator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number)))
    return {status:200, error:undefined, data:teacher}
}class UserController {
    async index() {
       const users =  await Database.table('users')    

       return {status:200 ,error:undefined,data: users }
    } 

    async show ({request}) {
        const {id} = request.params
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error) 
        return { status:500, error: validatedValue.error, data: undefined }
        const user = await Database
        .select('*')
        .from('users')
        .where("user_id",id)
        .first()

        return {status:200 ,error:undefined,data:user|| {}}
    }
    async destroy({request}) {
       const {id} =request.params
       await Database
       .table('users')
       .where({user_id:id})
       .delete()

       return {status:200,error:undefined,data:{message:'success'}}
    }
    async update({request}) {
        //const{body,params} = request
        //const {id} = params
        const {first_name,last_name,email,password} = body
        const userId = await Database
        .table('users')
        .where({user_id:id})
        .update({first_name,last_name,email})

        const user = await Database
        .table('users')
        .where({user_id:id})
        .first()

        return {status:200 ,error:undefined,data:user}
    }
    
    async store ({request}){
        const {first_name,last_name,email,password} = request.body
        const rules ={
            first_name:'required',
            last_name:'required',
            email:'required|email|unique:teachers,email',
            password:'required|min:8',
        }
        const validation = await Validator.validateAll(request.body,rules)
        if(validation.fails())
        return{status:422,error:`validation fail`,data:undefined}
        
        const hashedPassword = await Hash.make(password)

       const teacher = await Database
       .table('users')
       .insert({first_name,last_name,email,password:hashedPassword})

       return {status:200,error: undefined,data : first_name,last_name,email}
    }
}
module.exports = UserController
