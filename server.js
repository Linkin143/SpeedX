const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const port = 3000
dotenv.config({path: './config.env'});
const express = require('express');
const path = require('path')



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



app.listen(port, () => {
  console.log(`Backend server running on port ✨ : ${port}`)
})
