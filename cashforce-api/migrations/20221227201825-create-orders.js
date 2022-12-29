'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderPath: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING
      },
      orderFileName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING
      },
      orderOriginalName: {
        defaultValue: null,
        unique: true,
        type: Sequelize.STRING
      },
      emissionDate: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      pdfFile: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      emitedTo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nNf: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      CTE: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      value: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      cnpjId: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      userId: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      buyerId: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      providerId: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      orderStatusBuyer: {
        defaultValue: '0',
        type: Sequelize.STRING
      },
      orderStatusProvider: {
        defaultValue: '0',
        type: Sequelize.STRING
      },
      deliveryReceipt: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      cargoPackingList: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      deliveryCtrc: {
        defaultValue: null,
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
    },);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
