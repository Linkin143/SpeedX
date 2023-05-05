const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const port = 3000
dotenv.config({path: './config.env'});
const express = require('express');
const path = require('path')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'utils')));
console.log(__dirname);

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);


mongoose.connect(DB, {
}).then(() => console.log("Connected to the DataBase 🧬"));


app.get('/', function(req, res) {
  const filePath = path.join(__dirname, 'templates', 'index.html');
  res.sendFile(filePath);
});

app.get('/signin', function(req, res) {
  const filePath = path.join(__dirname, 'templates','signin', 'signin.html');
  res.sendFile(filePath);
});

app.get('/about', function(req, res) {
  const filePath = path.join(__dirname, 'templates', 'AboutUs.html');
  res.sendFile(filePath);
});


app.get('/help', function(req, res) {
  const filePath = path.join(__dirname, 'templates', 'Help.html');
  res.sendFile(filePath);
});

app.get('/myprofile', function(req, res) {
  const filePath = path.join(__dirname, 'templates', 'MyProfile.html');
  res.sendFile(filePath);
});

app.get('/service', function(req, res) {
  const filePath = path.join(__dirname, 'templates', 'service.html');
  res.sendFile(filePath);
});

app.post('/sentemail', function(req, res) {


    email = req.body.email
    message = req.body.message
    username = req.body.username
    phone = req.body.phone
    date = new Date().toLocaleString();
    
const transporter = nodemailer.createTransport({
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
  
  transporter.sendMail(Options, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(port, () => {
  console.log(`Backend server running on port ✨ : ${port}`)
})
