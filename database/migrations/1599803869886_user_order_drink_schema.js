'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserOrderDrinkSchema extends Schema {
  up () {
    this.create('user_order_drinks', (table) => {
      table.increments("order_id")
      table.integer("user_id").notNullable()
      table.integer("drink_id").notNullable()
      table.timestamps()

      table
      .foreign("user_id")
      .references("users.user_id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      table
      .foreign("drink_id")
      .references("drinks.drink_id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    })
  }

  down () {
    this.drop('user_order_drinks')
  }
}

module.exports = UserOrderDrinkSchema
