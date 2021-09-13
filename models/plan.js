const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Plans extends Model {}

Plans.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PlanName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  guest: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  schedule: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cancelled: {
    type: DataTypes.TINYINT,
    defaultValue: 0,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "plans",
});

module.exports = Plans;
