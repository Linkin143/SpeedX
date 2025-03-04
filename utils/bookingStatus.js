const nodemailer = require('nodemailer');
const pug = require('pug');


exports.confirmBooking = async (req, res) => {
  console.log(req);
  this.bookingID = req._id;
  this.userID = req.user_id;
  this.pickup = req.pickup_address;
  this.drop = req.dropoff_address;
  this.pickupDate = req.pickup_date;
  this.expectedPrice = req.expected_price;
  this.status = req.status;
  this.userEmail = req.userEmail;
  this.userName = req.userName;

  const transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    type: "oauth2",
    secure: false, // true for port 465, false for other ports
    auth: {
      user: `${process.env.Email_From}`,
      pass: `${process.env.Email_Pass}`,
    },
  });

  const html = pug.renderFile(`${__dirname}/../views/emails/confirmBooking.pug`, {
    bookingID: this.bookingID,
    userID: this.userID,
    pickup: this.pickup,
    drop: this.drop,
    pickupDate: this.pickupDate,
    expectedPrice: this.expectedPrice,
    status: this.status,
    userEmail: this.userEmail,
    userName: this.userName,
  });

  const Options = {
    from: `${process.env.Email_From}`,
    to: this.userEmail,
    subject: 'Approved: New Booking on SpeedX',
    html,
  };

  try {
    const emailResponse = await transporter.sendMail(Options);
    console.log('Email sent to recipient:', emailResponse.response);
  } catch (error) {
    console.error('Error sending email to recipient:', error);
  }

};

exports.bookingDeny = async (req, res) => {
  console.log(req);
  this.bookingID = req._id;
  this.userID = req.user_id;
  this.pickup = req.pickup_address;
  this.drop = req.dropoff_address;
  this.pickupDate = req.pickup_date;
  this.expectedPrice = req.expected_price;
  this.status = req.status;
  this.userEmail = req.userEmail;
  this.userName = req.userName;

  const transporter = await nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: `${process.env.Email_From}`,
      pass: `${process.env.Email_Pass}`,
    },
  });

  const html = pug.renderFile(`${__dirname}/../views/emails/denyBooking.pug`, {
    bookingID: this.bookingID,
    userID: this.userID,
    pickup: this.pickup,
    drop: this.drop,
    pickupDate: this.pickupDate,
    expectedPrice: this.expectedPrice,
    status: this.status,
    userEmail: this.userEmail,
    userName: this.userName,
  });

  const Options = {
    from: `${process.env.Email_From}`,
    to: this.userEmail,
    subject: 'Denyed: New Booking on SpeedX',
    html,
  };

  try {
    const emailResponse = await transporter.sendMail(Options);
    console.log('Email sent to recipient:', emailResponse.response);
  } catch (error) {
    console.error('Error sending email to recipient:', error);
  }

};
