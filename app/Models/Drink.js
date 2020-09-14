'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Drink extends Model {
    static get primaryKey() {
        return "drink_id";
      }
      user_order_drinks() {
        return this.hasMany('App/Models/User_order_drinks');
      }
}

module.exports = Drink
