const express = require('express');
const app = express();
const authController = require('./../contollers/authController')
const path = require('path')
const router = express.Router(); 

exports.index = function(req, res) {
  const user = res.locals.user;
  res.render('index', { user });
};
  exports.signup = function(req, res) {
    res.render('signin');
  };
  
  exports.about =  function(req, res) {
    const user = res.locals.user;
    res.render('aboutus', { user });
  };
  
  
  exports.help =  function(req, res) {
    const user = res.locals.user;
    res.render('help', { user });
  };
  
  exports.myprofile = function(req, res) {
    const user = res.locals.user;
    res.render('myprofile', { user });
  };
  
  exports.service = function(req, res) {
    const user = res.locals.user;
    res.render('service', { user });
  };

