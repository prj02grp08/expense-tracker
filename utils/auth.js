const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('homepage');
    } else {
        next();
    }
};

module.exports = withAuth;