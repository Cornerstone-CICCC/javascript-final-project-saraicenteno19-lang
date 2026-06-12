/**
 * Return basic information about a string.
 * Words are separated by spaces. Sentences end with ., !, or ?.
 * @param {string} str
 * @returns {{characters: number, words: number, sentences: number}}
 */
function analyzeText(str) {
  if (str === undefined) {
    throw new Error('String cannot be undefined');
  }

  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }

  const characters = str.length;
  const cleanText = str.trim();

  if (cleanText === '') {
    return {
      characters: characters,
      words: 0,
      sentences: 0,
    };
  }

  const words = cleanText.split(/\s+/).length;
  const punctuation = cleanText.match(/[.!?]/g);
  let sentences = 0;

  if (punctuation) {
    sentences = punctuation.length;
  } else {
    sentences = 1;
  }

  return {
    characters: characters,
    words: words,
    sentences: sentences,
  };
}

module.exports = analyzeText;
