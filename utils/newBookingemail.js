const nodemailer = require('nodemailer')
const pug = require('pug');

exports.newBooking = async  (req, res) => {
    console.log(req)
    console.log(res._id)
    this.bookingID = res
    this.userID = req.user_id
    this.pickup = req.pickup_address
    this.drop = req.dropoff_address
    this.pickupDate = req.pickup_date
    const transporter = await nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: `${process.env.Email_From}`,
            pass: `${process.env.Email_Pass}`
        }
    });

    const html = pug.renderFile(`${__dirname}/../views/emails/newBooking.pug`, {
        bookingID : this.bookingID,
        userID : this.userID,
        pickup : this.pickup,
        drop : this.drop,
        pickupDate : this.pickupDate,
      });

    const Options = {
        from: `${process.env.Email_From}`,
        to: `${process.env.Email_From}`,
        subject: 'New Booking on SpeedX',
        html
    };

    transporter.sendMail(Options, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("email sent: " + info);
        }
    });
}