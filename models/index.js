const Category = require("./Category");
const User = require("./User");
const Expense = require("./Expense");

User.hasMany(Expense, {
    foreignKey: "user_id",
    allowNull: false
});
Expense.belongsTo(User)


User.hasMany(Category, {
    foreignKey: "category_id",
    allowNull: false
});
Category.belongsTo(User)

// User.belongsTo(Expense)
// User.belongsTo(Expense)

// // // User.belongsTo(Category)
// User.belongsTo(Category)




module.exports = { Category, User, Expense };
