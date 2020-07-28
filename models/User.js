const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: String,
    googleId: String,
    thumbnail: String
});

module.exports = mongoose.model('User', userSchema);