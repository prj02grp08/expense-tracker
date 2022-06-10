const router = require("express").Router();

const { Expense } = require("../../models");

// get categories route

router.get("/", (req, res) => {
  Expense.findAll()
    .then((dbExpenseData) => res.json(dbExpenseData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// getting Expense by id
router.get("/:id", (req, res) => {
  Expense.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No Expense found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post
router.post("/", (req, res) => {
  Expense.create({
    name: req.body.name,
    value: req.body.value,
    user_id: req.body.user_id,
    category_id: req.body.category_id,
  })
    .then((dbExpenseData) => res.json(dbExpenseData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  Expense.update(
    {
      name: req.body.name,
      value: req.body.value,
      category_id: req.body.category_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbExpenseData) => {
      if (!dbExpenseData) {
        res.status(404).json({ message: "No Expense found with this id" });
        return;
      }
      res.json(dbExpenseData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// delete route
router.delete("/:id", (req, res) => {
  Expense.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbExpenseData) => {
      if (!dbExpenseData) {
        res.status(404).json({ message: "No Expense found with this id" });
        return;
      }
      res.json(dbExpenseData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
