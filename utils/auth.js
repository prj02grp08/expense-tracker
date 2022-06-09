const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.render('homepage');
    } else {
        next();
    }
};

module.exports = withAuth;