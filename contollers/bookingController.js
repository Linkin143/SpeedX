const Booking = require('./../models/bookingsModels')
const newBookingemail = require('../utils/newBookingemail')
const bookingStatus = require('../utils/bookingStatus')

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

exports.BookingId = async (req, res) => {
    const Book = await Booking.findById(req.params.id);
    if (!Book) {
      return next(new AppError('No user found with that ID', 404));
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        Book
      }
    });
  }

  exports.bookingApprove = async (req, res, next) => {
      const Book = await Booking.findByIdAndUpdate(req.params.id, { status: 'approve' }, {
          new: true,
          runValidators: true
      });

      if (!Book) {
          return next(new AppError('No tour found with that ID', 404));
      }
  
    await bookingStatus.confirmBooking(Book);

      res.status(200).json({
          status: 'success',
          data: {
              Book
          }
      });
  }
  

  exports.bookingDeny = async (req, res) => {
    const Book = await Booking.findByIdAndUpdate(req.params.id, { status: 'deny' }, {
        new: true,
        runValidators: true
    });
    await bookingStatus.bookingDeny(Book);
    
    if (!Book) {
        return next(new AppError('No tour found with that ID', 404));
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            Book
        }
    });
  }


  exports.myorders = async (req, res) => {
    try {
      const bookings = await Booking.find({ user_id: req.params.user_id });
  
      if (!bookings) {
        return res.status(404).json({ message: 'No bookings found for the user' });
      }
  
      res
        .json({
            results: bookings.length,
            objects: {
                bookings
            }
        });

    } catch (error) {
      console.error('Error retrieving bookings:', error);
      res.status(500).send('Error retrieving bookings');
    }
  };
  