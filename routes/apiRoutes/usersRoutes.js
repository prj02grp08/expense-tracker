const router = require("express").Router();

const { User } = require("../../models");

// get user
router.get("/", (req, res) => {
  User.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// getting user by id
router.get("/:id", (req, res) => {
  User.findOne({ id: req.params.id }).catch((err) => {
    console.log(err);
    res.status(404).json(err);
  });
});

router.post("/", (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
