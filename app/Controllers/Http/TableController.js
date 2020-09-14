'use strict'
const Database = use("Database");
const Booking = use('App/Models/Table');
class TableController {
    async booking ( { request, response, auth }){
    const { seat, price , table_id } = request.body
    const booking = new Booking()
    booking.seat = seat
    booking.user_id = auth.user.id
    booking.price = price
    booking.table_id = table_id
    await booking.save()
    return response.redirect("/index")
}
}

module.exports = TableController
