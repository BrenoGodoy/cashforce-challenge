'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    orderNfId: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    orderNumber: {
      allowNull: false,
      type: DataTypes.STRING
    },
    orderPath: {
      defaultValue: null,
      unique: true,
      type: DataTypes.STRING
    },
    orderFileName: {
      defaultValue: null,
      unique: true,
      type: DataTypes.STRING
    },
    orderOriginalName: {
      defaultValue: null,
      unique: true,
      type: DataTypes.STRING
    },
    emissionDate: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    pdfFile: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    emitedTo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    nNf: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    CTE: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    value: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    cnpjId: {
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    userId: {
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    buyerId: {
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    providerId: {
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    orderStatusBuyer: {
      defaultValue: '0',
      type: DataTypes.STRING
    },
    orderStatusProvider: {
      defaultValue: '0',
      type: DataTypes.STRING
    },
    deliveryReceipt: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    cargoPackingList: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    deliveryCtrc: {
      defaultValue: null,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};
