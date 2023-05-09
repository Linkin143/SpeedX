const express = require('express')
const usercontrollers = require('./../contollers/userController');
const authcontrollers = require('./../contollers/authController');
const router = express.Router();

router.post('/signup', authcontrollers.signup)

router
    .route('/')
    .get(usercontrollers.allUsers)
    .post(usercontrollers.addUsers)
router
    .route('/:id')
    .get(usercontrollers.userId)
    .patch(usercontrollers.updateUsers)
    .delete(usercontrollers.deleteUsers)

module.exports = router;