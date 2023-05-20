const nodemailer = require('nodemailer')

exports.contact = async  (req, res) => {
    email = req.body.email
    message = req.body.message
    username = req.body.username
    phone = req.body.phone
    date = new Date().toLocaleString();

    const transporter = await nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: `${process.env.Email_From}`,
            pass: `${process.env.Email_Pass}`
        }
    });
    const Options = {
        from: `${process.env.Email_From}`,
        to: `${process.env.Email_From}`,
        subject: 'New From Contact',
        html: `<h2>FROM: ${email}</h2>
                <h3>Phone No.: ${phone}</h3>
                <h3>Name: ${username}</h3>
                <h3>Message: ${message}</h3>
                <h3>Date: ${date}</h3>`
    };

    transporter.sendMail(Options, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.send(`<script>window.location.href = "/help";</script>`);
            console.log("email sent: " + info);
        }
    });
}