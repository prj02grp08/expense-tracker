const router = require('express').Router();

router.get('/', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/signup');
    //     return;
    // }

    res.render('signup');
});

module.exports = router;