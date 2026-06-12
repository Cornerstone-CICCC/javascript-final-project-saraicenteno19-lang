/**
 * Calculate the average of an array of numbers.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateAverage(arr) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');

  }
  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }
  if (arr.length === 0){
   throw new Error('Array cannot be empty');
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      throw new Error('Array can only contain numbers');
    }
    total += arr[i];
  }
  return total / arr.length;


}

module.exports = calculateAverage;
