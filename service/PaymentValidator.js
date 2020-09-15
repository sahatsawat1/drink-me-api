const Validator= use("Validator")

module.exports = async function paymentValidator(first_name,last_name,ID_card,phone_number){
    const rules ={
        ffirst_name:'required',
        last_name:'required',
        ID_card:'required|ID_card|unique:ID_card,ID_card',
        phone_number:'required|max:10',
    }
    const validation = await Validator.validateAll({   
        
    },rules)
    return{first_name,last_name,ID_card,phone_number
    }
        error: validation.messages()
}