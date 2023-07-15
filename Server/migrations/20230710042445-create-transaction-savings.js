'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransactionSavings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SavingsId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Savings",
            key: "id",
        },
      },
      TransactionId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Transactions",
            key: "id",
        },
      },
      totalTransactions: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TransactionSavings');
  }
};