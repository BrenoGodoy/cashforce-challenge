const express = require('express');
const cors = require('cors');
require('express-async-errors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { res.status(418).send('API NO AR!') });

module.exports = app;
