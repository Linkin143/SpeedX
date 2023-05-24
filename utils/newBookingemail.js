const nodemailer = require('nodemailer');
const pug = require('pug');

exports.newBooking = async (req, res) => {
  console.log(req);
  console.log(res._id);
  this.bookingID = res;
  this.userID = req.user_id;
  this.pickup = req.pickup_address;
  this.drop = req.dropoff_address;
  this.pickupDate = req.pickup_date;
  this.expectedPrice = req.expected_price;
  userEmail = req.userEmail;
  userName = req.userName;

  const transporter = await nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: `${process.env.Email_From}`,
      pass: `${process.env.Email_Pass}`,
    },
  });

  const html = pug.renderFile(`${__dirname}/../views/emails/newBooking.pug`, {
    bookingID: this.bookingID,
    userID: this.userID,
    pickup: this.pickup,
    drop: this.drop,
    pickupDate: this.pickupDate,
    expectedPrice: this.expectedPrice,
  });

  const htmlTO = pug.renderFile(`${__dirname}/../views/emails/newBookinguser.pug`, {
    bookingID: this.bookingID,
    userID: this.userID,
    pickup: this.pickup,
    drop: this.drop,
    pickupDate: this.pickupDate,
    expectedPrice: this.expectedPrice,
    userName,
  });

  const Options = {
    from: `${process.env.Email_From}`,
    to: `${process.env.Email_From}`,
    subject: 'New Booking on SpeedX',
    html,
  };

  const OptionsTO = {
    from: `${process.env.Email_From}`,
    to: userEmail,
    subject: 'New Booking on SpeedX',
    html: htmlTO,
  };

  try {
    const emailResponse = await transporter.sendMail(Options);
    console.log('Email sent to first recipient:', emailResponse.response);
  } catch (error) {
    console.error('Error sending email to first recipient:', error);
  }

  try {
    const emailResponseTO = await transporter.sendMail(OptionsTO);
    console.log('Email sent to second recipient:', emailResponseTO.response);
  } catch (error) {
    console.error('Error sending email to second recipient:', error);
  }
};
