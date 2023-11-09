const express = require('express');
const SongController = require('../controllers/SongController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'ok' });
});

routes.post('/api/new/track', SongController.store);

module.exports = routes;