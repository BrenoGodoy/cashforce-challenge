const express = require('express');
const cors = require('cors');
const OrdersController = require('./controllers/orders');
const OrdersService = require('./services/orders');
const { orders, buyers, providers } = require('./models');
const BuyersController = require('./controllers/buyers');
const BuyersService = require('./services/buyers');
const ProvidersController = require('./controllers/providers');
const ProvidersService = require('./services/providers');
require('express-async-errors');

const app = express();
app.use(cors());
app.use(express.json());

const order = new OrdersController(new OrdersService(orders));
const buyer = new BuyersController(new BuyersService(buyers));
const provider = new ProvidersController(new ProvidersService(providers));

app.get('/', (req, res) => { res.status(418).send('API NO AR!') });

app.get('/orders', (req, res) => {
  order.getAll(req, res);
});

app.get('/buyers/:id', (req, res) => {
  buyer.getById(req, res);
});

app.get('/providers/:id', (req, res) => {
  provider.getById(req, res);
});

module.exports = app;
