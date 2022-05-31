const router = require('express').Router();


router.get('/hello', function (req, res) {
    res.send('hi!')
});

router.get('/home', function(req, res) {
     res.render('homepage');
});

router.get('/login', function(req, res) {
     res.render('login');
});

module.exports = router;