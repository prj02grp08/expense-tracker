const router = require("express").Router();

const categoryRoutes = require("./categoryRoutes.js");
const expensesRoutes = require("./expensesRoutes");
const usersRoutes = require("./usersRoutes");

router.use("/category", categoryRoutes);
router.use("/expenses", expensesRoutes);

router.use("/users", usersRoutes);

module.exports = router;
