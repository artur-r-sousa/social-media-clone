'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.string('tag', 254).notNullable().unique()
      table.string('name', 40).notNullable()
      table.string('surname', 40).notNullable()
      table.string('profileImg', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema