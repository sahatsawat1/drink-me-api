'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class User extends Model {
    static boat(){
        super.boot()
        this.addHook('beforesave', async (usertInstance) => {
            if (userInstance.dirty.password){
                usertInstance.password = await HashChangeEvent.make(userInstance.dirty.password)
            }
        })
    }
    static get primaryKey(){
        return 'user_id'
    }
    tables(){
        return this.hasMany('App/Models/Table')
    }
    payments(){
      return this.hasMany('App/Models/Payment')
  }
  tables(){
    return this.hasMany('App/Models/Table')
}
user_order_drinks(){
  return this.hasMany('App/Models/UserOderDrink')
}
}

module.exports = User
