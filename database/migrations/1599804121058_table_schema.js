'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TABLESchema extends Schema {
  up () {
    this.create('tables', (table) => {
      table.increments("table_id")
      table.integer("user_id").notNullable()
      table.integer("seat").notNullable()
      table.string("status",1).notNullable()
      table.string("user",150).notNullable()
      table.timestamps()

      table
      .foreign("user_id")
      .references("users.user_id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    })
  }

  down () {
    this.drop('tables')
  }
}

module.exports = TABLESchema
