// ********* EBay OA Question ************

// You have an array of integers (example: [1, 2, 3, 4]).

// You have an access code (example: 1234).

// You want to check how many maximum times you can create that access code by concatenating array elements without reusing the same position twice.


function maxAccessCodePairs(arr, accessCode) {
  const target = accessCode.toString();
  const freq = {};

  // Build frequency map
  for (let num of arr) {
    const str = num.toString();
    freq[str] = (freq[str] || 0) + 1;
  }

  let total = 0;

  // Try every split of target into prefix + suffix
  for (let i = 1; i < target.length; i++) {
    const prefix = target.slice(0, i);
    const suffix = target.slice(i);

    if (freq[prefix] && freq[suffix]) {
      if (prefix === suffix) {
        // choose 2 distinct indices → n*(n-1)
        total += freq[prefix] * (freq[prefix] - 1);
      } else {
        total += freq[prefix] * freq[suffix];
      }
    }
  }

  return total;
}

// Example
console.log(maxAccessCodePairs([1, 212, 12], 1212)); // → 3
console.log(maxAccessCodePairs([12, 34, 56, 12, 34], 1234)); // → 4
