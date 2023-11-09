'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Song.init({
    track_name: DataTypes.STRING,
    track_url: DataTypes.STRING,
    saved_at: DataTypes.STRING,
    track_id: DataTypes.STRING,
    cover_url: DataTypes.STRING,
    track_isrc: DataTypes.STRING,
    artist_name: DataTypes.STRING,
    album_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Song',
  });
  
  return Song;
};