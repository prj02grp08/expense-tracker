const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Report extends Model {}

// create fields/columns for Report model
Report.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },

      //   ?? define relationship to expense how to get expense by user here.
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "report",
  }
);

module.exports = Category;
