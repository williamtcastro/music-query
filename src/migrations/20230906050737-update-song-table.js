'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('Songs', 'track_id', Sequelize.STRING);
    await queryInterface.addColumn('Songs', 'cover_url', Sequelize.STRING);
    await queryInterface.addColumn('Songs', 'track_isrc', Sequelize.STRING);
    await queryInterface.addColumn('Songs', 'artist_name', Sequelize.STRING);
    await queryInterface.addColumn('Songs', 'album_name', Sequelize.STRING);
    
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
