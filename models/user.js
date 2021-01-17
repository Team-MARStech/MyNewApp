const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email : String,
    phoneNo : String,
    name : String,
    password : String,
    dpPath : String,
    createdAt : {
        type : Date, default: Date.now
    }
},{versionKey: false})

exports.User =  mongoose.model('User', userSchema);