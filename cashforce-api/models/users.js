'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
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
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phoneNumber: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    mobile: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    departament: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    verificationCode: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    emailChecked: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    cashforceAdm: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
