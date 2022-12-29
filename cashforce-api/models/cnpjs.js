'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cnpjs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.buyers, { foreignKey: 'cnpjId', as: 'cnpjBuyers' });
      this.hasMany(models.orders, { foreignKey: 'cnpjId', as: 'cnpjOrders' });
      this.hasMany(models.providers, { foreignKey: 'cnpjId', as: 'cnpjProviders' });
      this.hasMany(models.sponsors, { foreignKey: 'cnpjId', as: 'cnpjSponsors' });
    }
  }
  cnpjs.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cnpj: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    companyType: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'cnpjs',
  });
  return cnpjs;
};
