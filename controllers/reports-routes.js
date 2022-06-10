const { Category, Expense } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

const router = require('express').Router();

router.get('/', withAuth, (req, res) => {
    // console.log(req)
    if (req.session.loggedIn) {
        const user_id = req.session.user_id;
        Category.findAll({
            attributes: [
                'id',
                'name'
            ],
        })
            .then(categoriesData => {
                console.log(categoriesData)
                const categories = categoriesData.map(category => category.get({ plain: true }));
                // const categories = categoriesData.map(category => category.get({ plain: true }));
                res.render('reports', { categories: categories, user_id: user_id, loggedIn: true });
                return;
            });
    } else {
        res.render('homepage');
    }

});

// router.get('/reports', withAuth, (req, res) => {
//     // console.log(req)
//     if (req.session.loggedIn) {
//         const user_id = req.session.user_id;
//         Expense.findOne({
//             attributes: [
//                 'name',
//                 'value',
//                 'user_id',
//                 'category_id',
//             ]
//         })
//             .then(expensesData => {
//                 console.log(expensesData)
//                 const expenses = expensesData.map(expense => expense.get({ plain: true }));
//                 // const categories = categoriesData.map(category => category.get({ plain: true }));
//                 res.render('reports', { expenses: expenses, user_id: user_id, loggedIn: true });
//                 return;
//             });
//     } else {
//         res.render('homepage');
//     }

// });

module.exports = router;