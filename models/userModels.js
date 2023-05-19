const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
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
        address: {
            type: String,
        },
        password: {
            type: String,
            required: [true, 'Password Should be there! and should be between 8 to 15 chars'],
            minlength: [8, 'Password should be minimum 8 chars!'],
            maxlength: 15,
            select: false
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

userSchema.pre('save', async function(next){

    if(!this.isModified('password')) return next();
  
    this.password = await bcrypt.hash(this.password, 10);
  
    this.confirmPassword = undefined;
    
    next();
  })

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

const User  = mongoose.model('user', userSchema);
module.exports = User;