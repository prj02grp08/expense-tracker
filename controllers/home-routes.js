const { Category } = require('../models');
const withAuth = require('../utils/auth');

const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('homepage');
});


router.get('/dashboard', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        const user_id = req.session.user_id;
        console.log("This is the user ID: " + user_id);
        Category.findAll({
            attributes: [
                'id',
                'name'
            ],
        })
            .then(categoriesData => {
                const categories = categoriesData.map(category => category.get({ plain: true }));
                res.render('dashboard', { categories: categories, user_id: user_id, loggedIn: true });
                return;
            });
    } else {
        res.render('xxxxx');
    }

});



module.exports = router;