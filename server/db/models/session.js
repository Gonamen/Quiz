'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Game}) {
      this.belongsTo(User, {foreignKey: 'user_id'});
      this.belongsTo(Game, {foreignKey: 'game_id'});
    }
  }
  Session.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: 'id',
      }
    },
    game_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Game",
        key: 'id',
      }
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};