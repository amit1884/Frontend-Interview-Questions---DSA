function maxOverlappingIntervals(intervals) {
    const start = [];
    const end = [];

    for (let [s, e] of intervals) {
        start.push(s);
        end.push(e);
    }

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let i = 0, j = 0;
    let count = 0, maxCount = 0;

    while (i < start.length && j < end.length) {
        if (start[i] <= end[j]) {
            count++;
            maxCount = Math.max(maxCount, count);
            i++;
        } else {
            count--;
            j++;
        }
    }

    return maxCount;
}

// ✅ Example
const intervals = [
    [1, 3],
    [2, 4],
    [3, 5],
    [7, 8],
    [6, 10]
];

console.log(maxOverlappingIntervals(intervals)); // Output: 3
