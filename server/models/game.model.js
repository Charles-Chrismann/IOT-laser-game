const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {}

  Game.init({}, {
    sequelize,
    modelName: 'Game'
  })
  
  return Game
}