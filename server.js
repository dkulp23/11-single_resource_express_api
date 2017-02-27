'use strict';

const express = require('express');
const debug = require('debug')('bike:server');
const morgan = require('morgan');
const jsonParser = require('body-parser').json();
const PORT = process.env.PORT || 3000;
const app = express();

const Bike = require('./model/bike.js');

app.use(morgan('dev'));

app.post('/api/bike', jsonParser, function(req, res, next) {
  debug('POST: /api/bike');

  Bike.createBike(req.body)
  .then( bike => res.json(bike))
  .catch( err => next(err));
});

app.listen(PORT, function() {
  debug(`Server's up on port: ${PORT}`);
});
