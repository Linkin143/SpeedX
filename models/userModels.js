const mongoose = require('mongoose');
// const validator = require('validator');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name Should be there!']
        },
        email: {
            type: String,
            required: [true, 'E-mail Should be there!'],
            unique: [true, 'E-mail Already Registered'],
            lowercase: true,
            trim: true
        },
        phone: {
            type: Number,
            required: [true, 'Phone No. Should be there!'],
            minlength: 10,
            maxlength: 13,
        },
        password: {
            type: String,
            required: [true, 'Password Should be there! and should be between 8 to 15 chars'],
            minlength: 8,
            maxlength: 15 
        },
        confirmPassword: {
            type: String,
            required: [true, 'Passwords needs to be there!'],
            validate: {
                validator: function(v) {
                    return v === this.password;
                },
                message: 'Confirm password must match password'
            }
        }

    }
);
const User  = mongoose.model('user', userSchema);
module.exports = User;