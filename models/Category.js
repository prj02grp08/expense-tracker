const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Category extends Model {}

// create fields/columns for Post model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
