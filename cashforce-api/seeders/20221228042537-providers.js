'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('providers', [{
      id: 1,
      name: 'CEDENTE 002',
      tradingName: 'CEDENTE 002 LTDA',
      createdAt: '2020-10-29 21:22:21',
      updatedAt: '2020-10-29 21:22:22',
      // cashforceTax,
      // responsibleName,
      // responsibleEmail,
      // responsiblePosition,
      // responsiblePhone,
      // responsibleMobile,
      // website,
      // postalCode,
      // address,
      // number,
      // complement,
      // neighborhood,
      // city,
      // state,
      // bank,
      // bankAgency,
      // account,
      // documents,
      // phoneNumber,
      // situation,
      // situationDate,
      cnpjId: 2,
      // email,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('providers', null, {}); 
  }
};
