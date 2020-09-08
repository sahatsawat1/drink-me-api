'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Schema extends Schema {
  up () {
    this.create('', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('')
  }
}

module.exports = Schema
