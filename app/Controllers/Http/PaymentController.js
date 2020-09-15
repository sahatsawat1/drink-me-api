'use strict'

const Payment = require("../../Models/Payment")

const Database = use('Database')
const Hash = use('Hash')
const Validator = use('Validator')
const User = use("App/Models/Payment")

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number)))
    return {status:200, error:undefined, data:Payment}
    class PaymentController {
    async index() {
       const payments =  await Database.table('payments')    

       return {status:200 ,error:undefined,data: payments }
    } 

    async show ({request}) {
        const {id} = request.params
        const validatedValue = numberTypeParamValidator(id)
        if (validatedValue.error) 
        return { status:500, error: validatedValue.error, data: undefined }
        const user = await Database
        .select('*')
        .from('payments')
        .where("payment_id",id)
        .first()

        return {status:200 ,error:undefined,data:payment|| {}}
    }
    async destroy({request}) {
       const {id} =request.params
       await Database
       .table('payments')
       .where({payment_id:id})
       .delete()

       return {status:200,error:undefined,data:{message:'success'}}
    }
    async update({request}) {
        //const{body,params} = request
        //const {id} = params
        const {first_name,last_name,ID_card,phone_number} = body
        const paymentId = await Database
        .table('payments')
        .where({payment_id:id})
        .update({first_name,last_name,phone_number})

        const user = await Database
        .table('payments')
        .where({payment_id:id})
        .first()

        return {status:200 ,error:undefined,data:payment}
    }
    
    async store ({request}){
        const {first_name,last_name,ID_card,phone_number} = request.body
        const rules ={
            first_name:'required',
            last_name:'required',
            ID_card:'required|ID_card|unique:ID_card,ID_card',
            phone_number:'required|max:10',
        }
        const validation = await Validator.validateAll(request.body,rules)
        if(validation.fails())
        return{status:422,error:`validation fail`,data:undefined}
        
    }
}
}

module.exports = PaymentController
