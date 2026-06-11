/**
 * Find the maximum number in an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');

  }

  if(!Array.isArray(arr)) {
    throw new Error ('Argument must be an array');

  }

  if (arr.length === 0) {
    throw new Error ('Array cannot be empty');
  }
  let max = arr[0];

  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== 'number') {
      throw new Error('Array can only contain numbers');

    }
    if (arr[i] > max) {
      max = arr[i];

    }
  }
  return max;
}
module.exports = findMax;
