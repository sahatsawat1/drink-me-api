'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', () => {
Route.get('/login', "AuthController.login")
Route.post("/login", "AuthController.loginUser")
Route.get("/register" , "AuthController.register")
Route.post("/register" , "AuthController.registerUser")
Route.get("/api/register" , "AuthController.registerUser")
})
Route.group(() => {
  Route.resource('/Bar', 'BarController')
  Route.resource('/Drink','DrinkController')
  Route.resource('/Payment','PaymentController')
  Route.resource('/User','UserController')
}).prefix('api/v1')