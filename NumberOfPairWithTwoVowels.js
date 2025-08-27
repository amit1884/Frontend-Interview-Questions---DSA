// You want to count the number of substrings of length 3 that contain exactly 2 vowels.


function countSubstringsWith2Vowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (let i = 0; i <= str.length - 3; i++) {
    const sub = str.slice(i, i + 3);
    let vowelCount = 0;

    for (let ch of sub) {
      if (vowels.has(ch.toLowerCase())) {
        vowelCount++;
      }
    }

    if (vowelCount === 2) {
      count++;
    }
  }

  return count;
}

// Example
console.log(countSubstringsWith2Vowels("abcdeiou")); // → 2 ("abc", "iou")
