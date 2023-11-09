require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const cors = require('cors');
const express = require('express');

const database = require('./database');
const routes = require('./routes');

(async () => {
  try {
    await database.sync();
  } catch (error) {
    console.log(error);
  }
})();


const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

const server = app.listen(process.env.PORT || 80, () => {
  const { port, address } = server.address();

  console.log('App listening at http://%s:%s', address, port);
});

module.exports = server;