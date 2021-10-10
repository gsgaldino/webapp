const translatte = require('translatte');

/**
 * Classe responsável por traduzir textos
 */
class Translator {

  constructor() { throw new Error("Essa classe não pode ser instanciada.") };

  static async translate(text, options, callback) {
    if (typeof text !== "string")
      throw new Error("Parâmetro de texto inválido");

    if (typeof options !== "object")
      throw new Error("O parâmetro options deve ser um objeto");


    function normalizeText(text) {
      const normalized = decodeURI(text);

      return normalized;
    };

    const normalizedText = normalizeText(text);

    const response = await translatte(normalizedText, { to: 'pt' })
      .then(res => response = res.text)
      .catch(err => response = err);

    console.log(response);
    return response;
  }

};

module.exports = Translator;
