const routes = require('express').Router();
const PdfController = require('../app/controllers/PdfController');

routes.post('/upload', PdfController.upload);

module.exports = routes;
