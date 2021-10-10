"use strict";

const express = require("express");

const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const routes = require('./routes');
const middlewares = require('./middlewares');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  };

  routes() {
    this.server.use('/api', routes);
  };

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(morgan('dev'));
    this.server.use(helmet());
  };

  exceptionHandler() {
    this.server.use(middlewares.notFound);
    this.server.use(middlewares.errorHandler);
  };

};

module.exports = new App().server;
