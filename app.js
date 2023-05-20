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
const bookingsRouter = require('./routing/bookingRoute')
const pageRouter = require('./routing/pageRoute')
const authController = require('./contollers/authController')
const cookieParser = require('cookie-parser')
const user = require('./contollers/authController')

app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'utils')));
app.use(express.static(path.join(__dirname, 'views')));

app.use((req, res , next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.cookies)
    next()
})

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/',authController.isLoggedIn, pageRouter.index)

app.post('/api/contact', contactController.contact)

app.use('/api/users', usersRouter);
app.use('/api/bookings', bookingsRouter);

app.get('/signin',authController.isLoggedIn, pageRouter.signup)
app.get('/about', pageRouter.about)
app.get('/help', pageRouter.help)
app.get('/myprofile',authController.protect, pageRouter.myprofile)
app.get('/service', pageRouter.service)

// When the Route is not There
app.all('*', (req, res, next) => {
    const err = new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
    err.status = 'fail';
    err.statusCode = 404;
    next(err);
});


console.log(__dirname);
module.exports = app;