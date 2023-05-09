const User = require('./../models/userModels');

exports.signup = async (req, res, next) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          user: newUser,
        },
      });
    } catch (error) {
      if (error.name === 'ValidationError') {
        res.status(400).json({
          status: 'fail',
          message: error.message,
        });
      } else {
        res.status(500).json({
          status: 'error',
          message: error.message,
        });
      }
    }
  };
  
