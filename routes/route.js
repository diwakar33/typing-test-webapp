const express = require('express');
const router = express.Router();

const {
    getHome,
    getSignup,
    getLogin,
    getContact,
    getGuest,
    getUser,
    postLogin,
    postSignup
} = require('../controllers/control');

router.get('/', getHome);
router.get('/sign', getSignup);
router.get('/log', getLogin);
router.get('/contact', getContact);
router.get('/guest', getGuest);
router.get('/user', getUser);
router.post('/logg', postLogin);
router.post('/signup', postSignup);

module.exports = router;
