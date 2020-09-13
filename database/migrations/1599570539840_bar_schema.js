'use strict'
const Database = use('Database')
/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarSchema extends Schema {
  up () {
    this.create('bars', (table) => {
      table.increments( "bar_id").notNullable()
      table.integer("payment_id").notNullable()
      table.string("brand",150).notNullable()
      table.integer("phone_number",10).notNullable()
      table.timestamps();

      table
      .foreign("payment_id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    
    })
  }


  down () {
    this.drop('bars')
  }
}

module.exports = BarSchema
