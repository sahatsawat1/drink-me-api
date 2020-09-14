'use strict'
const User = use('App/Models/User');
const Logger = use('Logger')
let token
let currentUsername
class AuthController {
    async login ( { view, request, response, auth } = context) {
        return view.render("component-login")
    }

   async loginUser({ view, request, auth }){
        const { email, password } = request.all()
        await auth.attempt(email, password)
        return view.render("components")
    }

    register({view}) {
        return view.render("component-register" , {token , currentUsername})
    }


    // * -> async
    async registerUser({ request, response }){
        const { first_name,last_name,gender,birthOfdate,phone_number,payment_id,account_number,username, email, password,} = request.body
        const user = new User()
        user.first_name = first_name
        user.last_name = last_name
        user.gender = gender
        user.birthOfdate = birthOfdate
        user.phone_number = phone_number
        user.payment_id = payment_id
        user.account_number = account_number
        user.username = username
        user.email = email
        user.password = password

        await user.save()

        return response.redirect("/login")
        // await Database.table("users").insert({username, email, password});// yield -> await
        // await Database.insert({ email, password }).into("users") //sql

    }

    async detail({ view, params, request, auth }){
        const user = auth.user
        return view.render("component-register", {firstname: "users"});
    }

    async logout({ view, request, auth }){
        await auth.logout()
        return view.render("component-register");
    }

}

module.exports = AuthController
