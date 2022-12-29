'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', 
    [
      {
        id: 1,
        orderNfId: '1605181324132',
        orderNumber: '18153',
        // orderPath,
        // orderFileName,
        // orderOriginalName,
        emissionDate: '2020-10-30T11:00:00-03:00',
        // pdfFile,
        emitedTo: '22843980000127',
        nNf: '18153',
        CTE: '',
        value: '198450',
        createdAt: '2020-10-30 17:54:18',
        updatedAt: '2020-10-30 17:54:18',
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: 0,
        orderStatusProvider: 0,
        // deliveryReceipt,
        // cargoPackingList,
        // deliveryCtrc,
      }, 
      {
        id: 2,
        orderNfId: '160518132413',
        orderNumber: '18157',
        // orderPath,
        // orderFileName,
        // orderOriginalName,
        emissionDate: '2020-11-04T15:32:35-02:00',
        // pdfFile,
        emitedTo: '35705180000272',
        nNf: '18157',
        CTE: '',
        value: '168850',
        createdAt: '2020-11-10 18:33:46',
        updatedAt: '2020-11-10 18:33:46',
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        orderStatusBuyer: 0,
        orderStatusProvider: 0,
        // deliveryReceipt:,
        // cargoPackingList:,
        // deliveryCtrc:
      }, 
      {
        id: 3,
        orderNfId: '1605181324130',
        orderNumber: '18184',
        // orderPath,
        // orderFileName,
        // orderOriginalName,
        emissionDate: '2020-11-10',
        // pdfFile,
        emitedTo: '00418477002640',
        nNf: '18184',
        CTE: '',
        value: '',
        cnpjId: 1,
        userId: 1,
        buyerId: 1,
        providerId: 1,
        createdAt: '2020-11-12 11:42:06',
        updatedAt: '2020-11-18 12:22:14',
        orderStatusBuyer: 7,
        orderStatusProvider: 3,
        // deliveryReceipt,
        // cargoPackingList,
        // deliveryCtrc,
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {}); 
  }
};
