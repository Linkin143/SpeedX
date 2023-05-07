const express = require('express')
const usercontrollers = require('./../contollers/userController');
const router = express.Router();

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