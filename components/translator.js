const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const britishToAmericanSpelling = Object.entries(
  americanToBritishSpelling,
).reduce((acc, [key, value]) => ((acc[value] = key), acc), {});

const britishToAmericanTitles = Object.entries(americanToBritishTitles).reduce(
  (acc, [key, value]) => ((acc[value] = key), acc),
  {},
);

console.log(britishToAmericanSpelling);

class Translator {
  translate(text, locale) {
    if (locale === "american-to-british") {
      return this.americanToBritish(text);
    } else if (locale === "british-to-american") {
      return this.britishToAmerican(text);
    }
  }

  americanToBritish(text) {
    let translatedText = text;

    translatedText = this.searchAndReplace(
      translatedText,
      americanToBritishSpelling,
    );

    translatedText = this.searchAndReplace(translatedText, americanOnly);

    return translatedText;
  }

  britishToAmerican(text) {
    let translatedText = text;

    translatedText = this.searchAndReplace(
      translatedText,
      britishToAmericanSpelling,
    );

    translatedText = this.searchAndReplace(translatedText, britishOnly);

    return translatedText;
  }

  searchAndReplace(text, dictionary) {
    let replacedText = text;

    for (const key in dictionary) {
      const value = dictionary[key];
      const regex = new RegExp(`(\\s|\\.|^)(${key})(\\s|\\.|$)`, "i");

      if (regex.test(replacedText)) {
        const result = regex.exec(replacedText);

        replacedText = replacedText.replaceAll(
          result[2],
          `<span class="highlight">${value}</span>`,
        );
      }
    }

    return replacedText;
  }
}

module.exports = Translator;
