// jshint esversion:6
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const port = 8000
dotenv.config({path: '.env'});



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
