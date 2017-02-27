'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const debug = require('debug')('bike:server');
const app = express();

app.listen(PORT, function() {
  debug(`Server's up on port: ${PORT}`);
});
