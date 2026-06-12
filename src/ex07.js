/**
 * Classify numbers as positive, negative, or zero.
 * @param {number[]} arr
 * @returns {{positive: number[], negative: number[], zero: number[]}}
 */
function classifyNumbers(arr) {
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
  return {
    positive: arr.filter(num => num > 0),
    negative: arr.filter(num => num < 0),
    zero: arr.filter(num => num === 0)
  };

} 

module.exports = classifyNumbers;
