const fs = require('fs');
const { Song } = require('../models');

module.exports = {
  async index(req, res) {},

  async show(req, res) {},

  async store(req, res) {
    fs.appendFile('src/files/tracks.txt', `${JSON.stringify(req.body)}\n`, function (err) {
        if (err) console.error(err);
        console.log('Saved!');
    });

    await Song.create(req.body);

    return res.json({ message: 'Saved' });
  },

  async delete(req, res) {},
};