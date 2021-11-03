const path = require('path');
const fs = require('fs');
const PDFParser = require("pdf2json");
const Pdf = require('../models/Pdf');

class PdfController {

  async upload(req, res, next) {
    try {
      const pdf = new Pdf(req);

      await pdf.save();
      pdf.translate().then(outputDirectory => {
        res.status(200).download(outputDirectory);
      });

    } catch (error) {
      next(error);
      console.log(error);
    }
  };

};

module.exports = new PdfController();
