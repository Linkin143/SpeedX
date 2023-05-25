const express = require('express')
const bookingController = require('./../contollers/bookingController');
const router = express.Router()

router.post('/addbooking', bookingController.addBooking);
router.get('/allbooking', bookingController.allBooking);

router
    .route('/:id')
    .get(bookingController.BookingId)
    .put(bookingController.bookingApprove)
    .patch(bookingController.bookingDeny)

module.exports = router;