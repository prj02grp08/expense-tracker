const router = require("express").Router();

const { Report } = require("../../models");

// get report
router.get("/", (req, res) => {
  User.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// /api/report route
// diplay user_id, category, expense

module.exports = router;
