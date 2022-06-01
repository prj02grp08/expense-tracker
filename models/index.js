const Category = require("./Category");
const User = require("./User");
const Expense = require("./Expense");

// Create associations

// Category.hasMany(User, {
//   foreignKey: "user_id",
// });

User.hasMany(Category);

module.exports = { Category, User, Expense };
