'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sneakers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorway: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      retailPrice: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      shoe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      smallImageUrl: {
        type: Sequelize.STRING
      },
      thumbUrl: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sneakers');
  }
};