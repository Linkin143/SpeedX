const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const port = 3000
dotenv.config({path: './config.env'});
const express = require('express');
const path = require('path')
const pageRouter = require('./routing/pageRoute')



const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);


mongoose.connect(DB, {})
  .then(() => console.log("Connected to the DataBase 🧬"))
  .catch((err) => console.log(err));


app.listen(port, () => {
  console.log(`Backend server running on port ✨ : ${port}`)
})
