'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MonthlyBudgets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      monthlyFund: {
        type: Sequelize.INTEGER
      },
      expenditureTarget: {
        type: Sequelize.INTEGER
      },
      SourceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sources',
          key: 'id',
        },
      },
      MonthId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Months',
          key: 'id',
        },
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
    await queryInterface.dropTable('MonthlyBudgets');
  }
};