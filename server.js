'use strict';

const express = require('express');
const debug = require('debug')('bike:server');
const morgan = require('morgan');
const createError = require('http-errors');
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

app.use(function(err, req, res, next) {
  debug('error handler middleware');

  if (err.status) {
    res.status(err.status).send(err.name);
    return;
  }

  err = createError(500, err.message);
  res.status(err.status).send(err.name);
  next();
});

app.listen(PORT, function() {
  debug(`Server's up on port: ${PORT}`);
});
