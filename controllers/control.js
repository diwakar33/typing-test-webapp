const express = require('express');
const db = require('../db/index');
const path = require('path');
const User = require('../models/userModel');

const app = express();
app.use(express.static(__dirname));

exports.getHome = (req, res) => res.sendFile('index.html', { root: path.join(__dirname, '../public') });
exports.getSignup = (req, res) => res.sendFile('Signup.html', { root: path.join(__dirname, '../public') });
exports.getLogin = (req, res) => res.sendFile('Login.html', { root: path.join(__dirname, '../public') });
exports.getContact = (req, res) => res.sendFile('Contact.html', { root: path.join(__dirname, '../public') });
exports.getGuest = (req, res) => res.sendFile('Guest.html', { root: path.join(__dirname, '../public') });
exports.getUser = (req, res) => res.sendFile('Afterlogin.html', { root: path.join(__dirname, '../public') });


exports.postLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if(user) {
            if(req.body.password === user.password) {

            res.sendFile('Afterlogin.html', { root: path.join(__dirname, '../public') });
                // res.redirect('Afterlogin.html', { root: path.join(__dirname, '../public') });
            } else {
                res.sendFile('Login.html', { root: path.join(__dirname, '../public') });
                // res.status(401).send('Incorrect credentials');
            }
        } else {
            res.sendFile('Login.html', { root: path.join(__dirname, '../public') });
            // res.status(401).send('Incorrect credentials');
        }
    } catch (error) {
        console.error('Error finding user by email:', error.message);
        res.sendFile('Signup.html', { root: path.join(__dirname, '../public') });
        // res.status(500).send('Internal Server Error');
    }
};


exports.postSignup = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.redirect('/log');
    } catch(error) {
        console.error('Error adding new user:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

