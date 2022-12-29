'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.orders, { foreignKey: 'orderId', as: 'order' });
      this.belongsTo(models.sponsors, { foreignKey: 'sponsorId', as: 'sponsor' });
    }
  }
  offers.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tax: {
      allowNull: false,
      type: DataTypes.STRING
    },
    tariff: {
      allowNull: false,
      type: DataTypes.STRING
    },
    adValorem: {
      allowNull: false,
      type: DataTypes.STRING
    },
    float: {
      allowNull: false,
      type: DataTypes.STRING
    },
    iof: {
      allowNull: false,
      type: DataTypes.STRING
    },
    expiresIn: {
      allowNull: false,
      type: DataTypes.DATE
    },
    paymentStatusSponsor: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    paymentStatusProvider: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    orderId: {
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    sponsorId: {
      defaultValue: null,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'offers',
  });
  return offers;
};
