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
test('should return only one error if input incorrect password', async ({ assert }) => {
  const validatedData = await UserValidator({
    frist_name: "kokozza",
    last_name:"janama",
    email:"iceyoyo@gmail.com",
    password: "zaza11223344"
  })
  assert.equal(validatedData.error.length, 3)
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