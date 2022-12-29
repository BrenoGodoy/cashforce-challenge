const express = require('express');
const cors = require('cors');
const OrdersController = require('./controllers/orders');
const OrdersService = require('./services/orders');
const { orders } = require('./models');
require('express-async-errors');

const app = express();
app.use(cors());
app.use(express.json());

const order = new OrdersController(new OrdersService(orders));

app.get('/', (req, res) => { res.status(418).send('API NO AR!') });

app.get('/orders', (req, res) => {
  order.getAll(req, res);
});
module.exports = app;
