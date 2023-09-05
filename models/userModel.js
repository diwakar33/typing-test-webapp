const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    cpass: String,
    clgname: String,
    subname: String,
    phone: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
