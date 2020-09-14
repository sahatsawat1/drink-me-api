'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Payment extends Model {
    static get primaryKey() {
        return "payment_id";
      }
      users(){
        return this.hasMany('App/models/User')
      }
}

module.exports = Payment
