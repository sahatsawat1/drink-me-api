'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments("payment_id")
      table.string("first_name",150).notNullable()
      table.string("last_name",150).notNullable()
      table.integer("ID_card").notNullable()
      table.integer("phone_number").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('payments')
  }
}

module.exports = PaymentSchema
