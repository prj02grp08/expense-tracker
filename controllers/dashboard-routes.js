const router = require('express').Router();
const withAuth = require('../utils/auth');
// const sequelize = require('../config/connection');
// const { User } = require('../models');

router.get('/', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard');
        return;
    }

    // res.render('homepage');
});

module.exports = router;