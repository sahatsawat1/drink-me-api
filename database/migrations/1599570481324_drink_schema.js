'use strict'
const Database = use('Database')
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DrinkSchema extends Schema {
  up () {
    this.create('drinks', (table) => {
      table.increments("drink_id")
      table.float("price").notNullable()
      table.string("brand",150).notNullable()
      table.integer("amount").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('drinks')
  }
}

module.exports = DrinkSchema
