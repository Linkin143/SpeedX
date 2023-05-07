const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Name Should be there!']
        },
        email: {
            type: String,
            require: [true, 'E-mail Should be there!'],
            unique: true,
            lowercase: true
        },
        phone: {
            type: Number,
            require: [true, 'Phone No. Should be there!']
        },
        password: {
            type: String,
            require: [true, 'Password Should be there!'],
            minlength: 8,
            maxlength: 15 
        },
        confirmPassword: {
            type: String,
            require: [true, 'Passwords not matching!']
        }

    }
);
const User  = mongoose.model('user', userSchema);
module.exports = User;