'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MonthlyBudget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MonthlyBudget.init({
    monthlyFund: DataTypes.INTEGER,
    expenditureTarget: DataTypes.INTEGER,
    SourceId: DataTypes.INTEGER,
    MonthId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MonthlyBudget',
  });
  return MonthlyBudget;
};