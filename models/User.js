const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: String,
    googleId: String
});

module.exports = mongoose.model('User', userSchema);