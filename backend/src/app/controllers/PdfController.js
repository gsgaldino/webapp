const path = require('path');
const fs = require('fs');
const PDFParser = require("pdf2json");
const Pdf = require('../models/Pdf');

class PdfController {

  /**
   * Returns a byteArray string
   * 
   * @param {string} str - input string
   */
  strToByteArray(str) {
    let myBuffer = [];
    const buffer = Buffer.from(str);
    for (var i = 0; i < buffer.length; i++) {
      myBuffer.push(buffer[i]);
    }
    return myBuffer;
  };

  async upload(req, res, next) {
    try {
      const pdf = new Pdf(req);
      const saved = await pdf.save();

      res.status(200).json({
        success: true,
        saved,
      });
    } catch (error) {
      next(error);
    }
  };

};

module.exports = new PdfController();
