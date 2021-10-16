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

    const normalizedText = decodeURI(text);

    const response = await translatte(normalizedText, { to: 'pt' })
      .then(res => res.text)
      .catch(err => { throw err });

    return response;
  }

};

module.exports = Translator;
