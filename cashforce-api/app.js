const express = require('express');
const cors = require('cors');
const OffersController = require('./controllers/offers');
const OffersService = require('./services/offers');
const { offers } = require('./models');
require('express-async-errors');

const app = express();
app.use(cors());
app.use(express.json());

const offer = OffersController(OffersService(offers));

app.get('/', (req, res) => { res.status(418).send('API NO AR!') });

app.get('/offers', (req, res) => {
  offer.getAll(req, res);
});
module.exports = app;
