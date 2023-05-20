const express = require('express')
const bookingController = require('./../contollers/bookingController');
const router = express.Router()

router.post('/addbooking', bookingController.addBooking);
router.get('/allbooking', bookingController.allBooking);


module.exports = router;