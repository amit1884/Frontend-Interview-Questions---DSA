function longestUniqueSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let maxSubstring = "";
    let charIndex = new Map(); 

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndex.has(char) && charIndex.get(char) >= start) {
            start = charIndex.get(char) + 1;
        }

        charIndex.set(char, end);

        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxSubstring = s.slice(start, end + 1);
        }
    }

    return maxSubstring;
}