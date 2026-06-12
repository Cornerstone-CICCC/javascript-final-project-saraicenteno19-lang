/**
 * Return a new array containing only the even numbers.
 * @param {number[]} arr
 * @returns {number[]}
 */
function filterEvenNumbers(arr) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');

  }
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');

  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      throw new Error('Array can only contain numbers');
    }
  }
  return arr.filter(num => num % 2 === 0);
} 
module.exports = filterEvenNumbers;
