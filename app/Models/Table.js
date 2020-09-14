'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Booking extends Model {
}
class Table extends Model {
    static get primaryKey() {
        return "table_id";
      }
      users(){
        return this.hasMany('App/models/User')
}
}

module.exports = Table
