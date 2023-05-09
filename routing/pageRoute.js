const express = require('express');
const app = express();
const path = require('path')


exports.index = function(req, res) {
    const filePath = path.join(__dirname,'..', 'templates' , 'index.html');
    res.sendFile(filePath);
  };
  
  exports.signup = function(req, res) {
    const filePath = path.join(__dirname,'..',  'templates','signin', 'signin.html');
    res.sendFile(filePath);
  };
  
  exports.about =  function(req, res) {
    const filePath = path.join(__dirname, '..',  'templates', 'AboutUs.html');
    res.sendFile(filePath);
  };
  
  
  exports.help =  function(req, res) {
    const filePath = path.join(__dirname, '..',  'templates', 'Help.html');
    res.sendFile(filePath);
  };
  
  exports.myprofile = function(req, res) {
    const filePath = path.join(__dirname, '..',  'templates', 'MyProfile.html');
    res.sendFile(filePath);
  };
  
  exports.service = function(req, res) {
    const filePath = path.join(__dirname, '..',  'templates', 'service.html');
    res.sendFile(filePath);
  };

