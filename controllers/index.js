const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const homeRoutes = require('./home-routes.js');
const signupRoutes = require('./signup-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const reportsRoutes = require('./reports-routes.js');

router.use('/', homeRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/reports', reportsRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
