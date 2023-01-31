const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {}

  console.log("1", Player)
  
  Player.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Player'
  })

  console.log("tt", Player)
  return Player
}