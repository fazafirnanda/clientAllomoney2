'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Targets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Targets.init({
    name: DataTypes.STRING,
    savingsTargets: DataTypes.INTEGER,
    totalCollected: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
    goalDate: DataTypes.DATE,
    timeCategory: DataTypes.STRING,
    day: DataTypes.STRING,
    date: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Targets',
  });
  return Targets;
};