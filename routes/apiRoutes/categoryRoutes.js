const router = require("express").Router();

const { Category } = require("../../models");

// get categories route

router.get("/", (req, res) => {
  Category.findAll()
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// getting category by id
router.get("/:id", (req, res) => {
  Category.findOne({ id: req.params.id }).catch((err) => {
    console.log(err);
    res.status(404).json(err);
  });
});

router.post("/", (req, res) => {
  Category.create({
    name: req.body.name,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
