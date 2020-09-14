'use strict'
const Database = use('Database')

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string("first_name",150).notNullable()
      table.string("last_name",150).notNullable()
      table.string("gender" ['M', 'F','O']).notNullable()
      table.date("birthOfdate").notNullable()
      table.integer("ID_card")
      table.integer("phone_number")
      table.integer("payment_id")
      table.integer("account_number").unique()
      table.string("username", 80).notNullable().unique()
      table.string("email", 254).notNullable().unique()
      table.string("password").notNullable()
      table.timestamps();

      table
      .foreign("payment_id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
