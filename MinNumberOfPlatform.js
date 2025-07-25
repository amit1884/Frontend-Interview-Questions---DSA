function minPlatforms(arrival, departure) {
    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);

    let n = arrival.length;
    let platformsNeeded = 1;
    let result = 1;

    let i = 1, j = 0;

    while (i < n && j < n) {
        if (arrival[i] <= departure[j]) {
            platformsNeeded++;
            i++;
        } else {
            platformsNeeded--;
            j++;
        }
        result = Math.max(result, platformsNeeded);
    }

    return result;
}

// ✅ Example
let arrival = [900, 940, 950, 1100, 1500, 1800];
let departure = [910, 1200, 1120, 1130, 1900, 2000];

console.log(minPlatforms(arrival, departure)); // Output: 3
