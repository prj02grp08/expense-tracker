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

module.exports = router;