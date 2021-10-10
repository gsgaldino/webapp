const PDFParser = require('pdf2json');

/**
 * Classe responsável por converter os arquivos PDF para JSON
 * E extrair o conteúdo
 */
class PdfParser {

  constructor() {
    this.pdfParser = new PDFParser();

    this.pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
  };

  parse(path, callback) {
    this.pdfParser.on("pdfParser_dataReady", pdfData => {
      callback(pdfData);
    });

    this.pdfParser.loadPDF(path);
  };

};

module.exports = PdfParser;
