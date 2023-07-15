"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class TransactionSavings extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    TransactionSavings.init(
        {
            SavingsId: DataTypes.INTEGER,
            TransactionId: DataTypes.INTEGER,
            totalTransactions: DataTypes.INTEGER,
            postDate: DataTypes.DATE,
            description: DataTypes.TEXT,
            SourceId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "TransactionSavings",
        }
    );
    return TransactionSavings;
};
