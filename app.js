const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv');
const morgan = require('morgan');
app.use(morgan('dev'));
dotenv.config({path: './config.env'});
const bodyParser = require('body-parser')
const contactController = require('./contollers/contactController')
const usersRouter = require('./routing/userRoute')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'utils')));


app.post('/api/contact', contactController.contact)

app.use('/api/users', usersRouter);


// When the Route is not There
// app.all('*', (req, res, next) => {
//     const err = new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
//     err.status = 'fail';
//     err.statusCode = 404;
//     next(err);
// });


console.log(__dirname);
module.exports = app;