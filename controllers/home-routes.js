const { Category } = require('../models');

const router = require('express').Router();

// router.get('/', (req, res) => {
//     console.log('RES', res)
//     Category.findAll()
//         .then(categoriesData => {
//             console.log('RES', categoriesData)
//             res.render('dashboard', { user_id: req.session.user_id, loggedIn: true });
//         });

// })


router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        // console.log('req:', req)
        Category.findAll({
            attributes: [
                'id',
                'name'
                // 'title',
                // 'created_at',
                // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
            ],
        })
            .then(categoriesData => {
                const categories = categoriesData.map(category => category.get({ plain: true }));

                // const categories = JSON.parse(categoriesData);
                console.log(categories);

                // let categoriesData = objArray.map(({ foo }) => foo)

                // for (var i = 0; i < categoriesData.length; i++) {
                //     let names = categoriesData.map(({ item }) => item[i].name);
                //     console.log(names)
                // }




                console.log('RES', categoriesData[1].name);

                res.render('dashboard', { categories: categories, loggedIn: true });
                // res.render('homepage', { sessionID: req.session.id });
                return;
            });
    }

    // res.render('homepage');
});

module.exports = router;