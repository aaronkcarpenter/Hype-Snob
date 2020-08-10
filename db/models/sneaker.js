'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sneaker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sneaker.init({
    brand: DataTypes.STRING,
    colorway: DataTypes.STRING,
    gender: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    styleId: DataTypes.STRING,
    shoe: DataTypes.STRING,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sneaker',
  });
  return Sneaker;
};