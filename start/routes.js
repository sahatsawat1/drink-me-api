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
Route.get("/", () => {
  return { greeting: "Yes" };
});
Route.group(() => {
  Route.resource('/bars', 'BarController')
  Route.resource('/drinks','DrinkController')
  Route.resource('/payments','PaymentController')
  Route.resource('/users','UserController')
}).prefix('api/v1')

Route.get('/login', "AuthController.login")
Route.post("/login", "AuthController.loginUser")
Route.get("/register" , "AuthController.register")
Route.post("/register" , "AuthController.registerUser")
Route.get("/api/register" , "AuthController.registerUser")

Route.post('/booking', "TableController.booking").middleware('auth')


Route.get('/logout', "AuthController.logout").middleware('auth')