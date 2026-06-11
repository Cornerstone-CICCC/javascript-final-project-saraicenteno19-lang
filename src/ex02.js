/**
 * Add all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');

  }
  if(!Array.isArray(arr)) {
    throw new Error('Argument must be an array');

  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number')
      throw new Error('Array can only contain numbers');

    total += arr[i];
  }
  return total;
}

module.exports = sumArray;
