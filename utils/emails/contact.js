const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config({path: './../../config.env'});
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
    email = req.body.email
    message = req.body.message
    username = req.body.username
    phone = req.body.phone

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: `${process.env.Email_From}`,
      pass: `${process.env.Email_Pass}`
    }
  });
  
  const Options = {
    from: `${process.env.Email_From}`,
    to: `${email}`,
    subject: 'New Request',
    text: `${message}`,
    html: `<h1>${email}</h1><br>
            <h2>${phone}</h2><br>
            <h2>${username}</h2><br>
            <h2>${message}</h2><br>`
  };
  
  transporter.sendMail(Options, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });