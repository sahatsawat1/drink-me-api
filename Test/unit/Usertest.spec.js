'use strict'

const { test } = use('Test/Suite')('UserValidator')
const UserValidator = require('../../service/UserValidator')

test('should return undefined error when input correct data', async ({ assert }) => {
  const validatedData = await UserValidator({
    frist_name: "iceiceice",
    last_name:"tototo",
    email:"icehHhHhhah@gmail.com",
    password: "Gogoza11223"
  })
  assert.isArray(validatedData.error, undefined)
})

test('should return error if input incorrect data', async ({ assert }) => {
  const validatedData = await UserValidator({
    frist_name: "korawit",
    last_name:"wilairat",
    email:"icezaza",
    password: "1122"
  })
  assert.isArray(validatedData.error)
})
test('should return error if input not unique email', async ({ assert }) => {
  const validatedData = await UserValidator({
    frist_name: "iceiceice",
    last_name:"tototo",
    email:"icerota@gmail.com",
    password: "112244556677"

  })
  assert.isOk(validatedData.error)
})
test('hould return more than one error if pass many incorrect data', async ({ assert }) => {
  const validatedData = await UserValidator({
    first_name: "wowza",
    last_name: "stang",
    email: "koarawit",
    password: "1234"
  })
  assert.isAbove(validatedData.error.length, 1)
})