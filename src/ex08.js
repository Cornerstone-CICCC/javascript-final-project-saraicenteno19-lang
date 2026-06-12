/**
 * Return the strings that contain the keyword.
 * The search should be case-insensitive.
 * @param {string[]} arr
 * @param {string} keyword
 * @returns {string[]}
 */
function search(arr, keyword) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');
  }
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }
  if (keyword === undefined) {
    throw new Error('Keyword cannot be undefined');
  }
  if (typeof keyword !== 'string') {
    throw new Error('Keyword must be a string');
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      throw new Error('Array can only contain strings');
    }
  }
  return arr.filter((item) => 
  item.toLowerCase().includes(keyword.toLowerCase())
);
}
module.exports = search;
