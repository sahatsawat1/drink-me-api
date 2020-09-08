'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DrinkSchema extends Schema {
  up () {
    this.create('drinks', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('drinks')
  }
}

module.exports = DrinkSchema
