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
      // Sneaker.hasMany(models.)
    }
  };
  Sneaker.init({
    brand: DataTypes.STRING,
    colorway: DataTypes.STRING,
    name: DataTypes.STRING,
    retailPrice: DataTypes.INTEGER,
    shoe: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    smallImageUrl: DataTypes.STRING,
    thumbUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sneaker',
  });
  return Sneaker;
};