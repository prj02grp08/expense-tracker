const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const homeRoutes = require('./home-routes.js');
const signupRoutes = require('./signup-routes.js')

router.use('/', homeRoutes);
router.use('/signup', signupRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
