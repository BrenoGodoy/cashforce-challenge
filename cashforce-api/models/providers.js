'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class providers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.orders, { foreignKey: 'providerId', as: 'provider' });
      this.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpjProviders' });
    }
  }
  providers.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    tradingName: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    cashforceTax: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    responsibleName: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    responsibleEmail: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    responsiblePosition: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    responsiblePhone: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    responsibleMobile: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    website: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    postalCode: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    address: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    number: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    complement: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    neighborhood: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    city: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    state: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    bank: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    bankAgency: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    account: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    documents: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    phoneNumber: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    situation: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    situationDate: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    cnpjId: {
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    email: {
      defaultValue: null,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'providers',
  });
  return providers;
};
