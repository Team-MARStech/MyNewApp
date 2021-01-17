var mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    name: String,
    date: { type: Date, default: Date.now }
},{versionKey: false})

exports.Post = mongoose.model('Post', postSchema);