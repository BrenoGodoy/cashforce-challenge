'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderportions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dVenc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vDup: {
        allowNull: false,
        type: Sequelize.STRING
      },
      availableToMarket: {
        defaultValue: 1,
        type: Sequelize.INTEGER
      },
      orderId: {
        defaultValue: null,
        type: Sequelize.INTEGER,
        references: {
          model: 'orders',
          key: 'id'
        }
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
    await queryInterface.dropTable('orderportions');
  }
};
