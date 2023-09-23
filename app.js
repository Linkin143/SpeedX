const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv');
// const morgan = require('morgan');
// app.use(morgan('dev'));
const axios = require('axios')
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
app.get('/about', authController.isLoggedIn,pageRouter.about)
app.get('/help', authController.isLoggedIn,pageRouter.help)
app.get('/myprofile',authController.isLoggedIn,authController.protect, pageRouter.myprofile)
app.get('/service', authController.isLoggedIn,pageRouter.service)
app.get('/myorder', authController.isLoggedIn,authController.protect, pageRouter.myorder)


app.get('/getDistance', async (req, res) => {
    try {
      const pickupAddress = req.query.pickupAddress;
      const dropOffAddress = req.query.dropOffAddress;
      const googleapis = "AIzaSyDAh5_JZiyJUj0YJFbn4f7UGDZrBTuiem0"
  
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${dropOffAddress}&origins=${pickupAddress}&key=${googleapis}`
      );
  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// When the Route is not There
app.all('*', (req, res, next) => {
    const err = new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
    err.status = 'fail';
    err.statusCode = 404;
    next(err);
});


console.log(__dirname);
module.exports = app;