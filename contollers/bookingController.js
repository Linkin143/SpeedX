const Booking = require('./../models/bookingsModels')
const newBookingemail = require('../utils/newBookingemail')

exports.allBooking = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({
            status: 'success',
            data: {
                bookings
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}

exports.addBooking = async (req, res) => {
    console.log(req.body);
    try {
        const newBooking = await Booking.create(req.body);
        await newBookingemail.newBooking(req.body,newBooking._id);
        res.status(201).json({
            status: 'success',
            data: {
                booking: newBooking
            }
        });
    } catch (err) {
        res.status(500).json({ status: 'Fail', Message: err });
    }
}
