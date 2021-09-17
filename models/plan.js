const { Model, DataTypes } = require("sequelize");
var sequelize = require("../config/connection");

class Plan extends Model {}

Plan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    PlanName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creator: {
      type: DataTypes.STRING,
      defaultValue: 0,
      // allowNull: false,
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Plan",
  }
);

module.exports = Plan;
