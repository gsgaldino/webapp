const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).send({hello: "world"})
});

module.exports = routes;
