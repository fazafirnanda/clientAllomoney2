'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Targets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      savingsTargets: {
        type: Sequelize.INTEGER
      },
      totalCollected: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Users",
            key: "id",
        },
      },
      goalDate: {
        type: Sequelize.DATE
      },
      timeCategory: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
      },
      date: {
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
    await queryInterface.dropTable('Targets');
  }
};