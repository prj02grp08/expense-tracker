const { Category, Expense } = require("../models");
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");

const router = require("express").Router();

router.get("/", withAuth, (req, res) => {
  if (req.session.loggedIn) {
    const user_id = req.session.user_id;
    Category.findAll({
      attributes: ["id", "name"],
    }).then((categoriesData) => {
      const categories = categoriesData.map((category) =>
        category.get({ plain: true })
      );

      res.render("reports", {
        categories: categories,
        user_id: user_id,
        loggedIn: true,
      });
      return;
    });
  } else {
    res.render("homepage");
  }
});

module.exports = router;
