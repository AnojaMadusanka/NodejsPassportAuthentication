const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex';

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

module.exports = con;