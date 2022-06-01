const Category = require("./Category");
const User = require("./User");
const Expense = require("./Expense");

User.hasMany(Expense, {
    foreignKey: "user_id",
    allowNull: false
});
Expense.belongsTo(User)


module.exports = { Category, User, Expense };
