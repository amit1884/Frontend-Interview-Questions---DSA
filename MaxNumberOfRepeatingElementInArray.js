// ********* EBay OA Question ************



// Given an array of integers, replace all the elements of the array with the sum of its digit, keep repeating this until all becomes single digit.
// When all element becomes single digit, return the max reating integer from the array. Incase of tie, return the greater element.

function mostRepeatedDigit(arr) {
  // Helper: reduce number to single digit by digit sum
  function toSingleDigit(num) {
    while (num > 9) {
      num = num
        .toString()
        .split("")
        .reduce((sum, d) => sum + Number(d), 0);
    }
    return num;
  }

  // Convert all numbers to single digits
  const singleDigits = arr.map(toSingleDigit);

  // Count frequencies
  const freq = {};
  for (let num of singleDigits) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Find most repeated number
  let maxCount = -1, mostRepeated = -1;
  for (let num in freq) {
    const digit = Number(num);
    if (
      freq[num] > maxCount || 
      (freq[num] === maxCount && digit > mostRepeated)
    ) {
      maxCount = freq[num];
      mostRepeated = digit;
    }
  }

  return mostRepeated;
}

// Example
console.log(mostRepeatedDigit([88, 123, 999, 56, 19])); 
// 88 -> 7, 123 -> 6, 999 -> 9, 56 -> 2, 19 -> 1
// All appear once → tie → returns 9 (max digit)
