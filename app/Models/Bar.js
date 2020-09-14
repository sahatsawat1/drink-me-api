'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bar extends Model {
    static get primaryKey() {
        return "bar_id";
      }
      paayments() {
        return this.hasMany('App/Models/payment');
      }
}

module.exports = Bar
