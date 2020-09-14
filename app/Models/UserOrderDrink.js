'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserOrderDrink extends Model {
    static get primaryKey() {
        return "order_id";
      }
      users(){
        return this.belongsTo('App/models/User')
}
drinks(){
        return this.belongsTo('App/models/Drink')
}
}

module.exports = UserOrderDrink
