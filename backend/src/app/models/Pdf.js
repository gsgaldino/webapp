const formidable = require('formidable');
const form = formidable.IncomingForm();
const path = require('path');
const fs = require('fs');
const PdfParser = require('./PdfParser');
const Translator = require('./Translator');

/**
 * Classe responsável por manipular os arquivos PDF 
 */
class Pdf {

  /**
   * @param {Object} request ${req.body} from express
   */
  constructor(request) {
    this._request = request;
    this.uploadDir = path.join(__dirname, '..', '..', '..', 'uploads');
    this.outputDir = path.join(__dirname, '..', '..', '..', 'uploads', 'output');
    this._path = "";

    this.pdfParser = new PdfParser();
  };

  /**
   * Responsavel por salvar o arquivo
   * @returns {String} path -> caminho para o arquivo salvo
   */
  async save() {
    form.uploadDir = this.uploadDir;
    form.keepExtensions = true;

    return await new Promise((resolve, reject) => {
      form.parse(this._request, (err, fields, files) => {
        if (err) throw new Error('Error parsing pdf file');

        const { name, type, size, path } = files.fileUpload;
        console.log(`Uploading file "${name}" type:${type} and size:${size} bytes`);

        // Rodamos esse changePath para jogar o path do arquivo um escopo pra fora para conseguirmos acessa-lo
        this.changePath(path);
        resolve(path);
      });
    })
  };

  translate(language) {

    this.getTranslation().then(result => {

      this.changePhrases(result);
    });

  };

  /**
   * Faz o parse de um arquivo PDF e retorna todos as frases e a sua tradução
   * @returns {Array} de objetos com as frases
   */
  getTranslation() {
    return new Promise((resolve, reject) => {

      this.parse().then(result => {
        let oldPhrases = [];
        let translatedPhrases = [];

        result.forEach(textArray => {
          textArray.forEach(async text => {
            const oldPhrase = decodeURIComponent(text).trim();

            oldPhrases.push(oldPhrase);
            translatedPhrases.push(Translator.translate(oldPhrase, {}));
          });
        });

        Promise.all(translatedPhrases).then(values => {
          const bothPhrases = values.map((translated, index) => ({
            translated: translated,
            old: oldPhrases[index]
          }));

          resolve(bothPhrases);
        });
      });
    });
  };

  /**
   * Pega todos os textos de um PDF e retorna em forma de array
   * @returns {Array} de arrays (cada array uma página do PDF)
   */
  parse() {
    return new Promise((resolve, reject) => {

      this.pdfParser.parse(this._path, async (data) => {
        const pages = data.formImage.Pages;
        const texts = pages.map(page => page.Texts);
        const encodedTextArrays = texts.map(textArray => textArray.map(text => text.R[0].T));

        resolve(encodedTextArrays);
      });
    });
  }

  changePhrases(phrasesArray) {
    fs.readFile(this._path, (err, data) => {
      if (err)
        throw err;

      let string = Buffer.from(data).toString();

      phrasesArray.forEach(item => {
        let characters = String(item.old);

        let match = [];
        for (let i = 0; i < characters.length; i++) {
          match.push('(-?[0-9]+)?(\\()?' + characters[i] + '(\\))?');
        };

        string = string.replace(new RegExp(match.join('')), function (m, m1) {
          // m1 holds the first item which is a space
          return item.translated;
        });
      });

      fs.writeFile(
        `${this.outputDir}/sampleOutput.pdf`,
        Buffer.from(string),
        'utf-8',
        (err, result) => {
          if (err) console.log(err);
        }
      );
    })
  }

  changePath(path) {
    this._path = path;
  };

};

module.exports = Pdf;
