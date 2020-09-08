'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarSchema extends Schema {
  up () {
    this.create('bars', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('bars')
  }
}

module.exports = BarSchema
