const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        user_id:{
            type: String,
            required: [true, 'UserID Should be there !']
        },
        pickup_address:{
            type: String,
            required: [true, 'Pick-up  Address Should be there!']
        },
        dropoff_address:{
            type: String,
            required: [true, 'Drop-off Address Should be there!']
        },
        booking_date:{
            type: Date,
            default: Date.now
        },
        category:{
            type: String,
            // required: [true, 'Category Should be there!']
        },
        pickup_date:{
            type: String,
            required: [true, 'Pick-up Date Should be there!']
        },
        expected_price:{
            type: String,
            required: [true, 'Expected Price Should be there!']
        }
    }
);
const bookings  = mongoose.model('booking', bookingSchema);
module.exports = bookings;