'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderportions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.orders, { foreignKey: 'orderId', as: 'orderPortions' });
    }
  }
  orderportions.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nDup: {
      allowNull: false,
      type: DataTypes.STRING
    },
    dVenc: {
      allowNull: false,
      type: DataTypes.STRING
    },
    vDup: {
      allowNull: false,
      type: DataTypes.STRING
    },
    availableToMarket: {
      defaultValue: 1,
      type: DataTypes.INTEGER
    },
    orderId: {
      defaultValue: null,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'orderportions',
  });
  return orderportions;
};
