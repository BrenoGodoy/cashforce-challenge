'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buyers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.cnpjs, { foreignKey: 'cnpjId', as: 'cnpjBuyers' });
      this.hasMany(models.orders, { foreignKey: 'buyerId', as: 'buyer' });
    }
  }
  buyers.init({
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
      type: DataTypes.STRING,
      defaultValue: null
    },
    cashforceTax: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    responsibleName: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    responsibleEmail: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    responsiblePosition: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    responsiblePhone: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    responsibleMobile: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    website: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    postalCode: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    number: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    complement: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    neighborhood: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    phoneNumber: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    situation: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    situationDate: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    cnpjId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      defaultValue: null
    },
    confirm: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'buyers',
  });
  return buyers;
};
