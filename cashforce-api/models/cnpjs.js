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
      this.hasMany(models.buyers, { foreignKey: 'cnpjId', as: 'cnpj' });
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
