'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TABLESchema extends Schema {
  up () {
    this.create('tables', (table) => {
      table.increments("table_id");
      table.integer("user_id");
      table.integer("seat");
      table.string("status",1);
      table.string("user",150);
      table.timestamps()

      table
      .foreign("user_id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    })
  }

  down () {
    this.drop('tables')
  }
}

module.exports = TABLESchema
