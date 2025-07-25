if (!Array.prototype.mySlice) {
  Array.prototype.mySlice = function (start = 0, end = this.length) {
    let arr = this;
    let len = arr.length;

    // Handle negative indices
    if (start < 0) start = Math.max(len + start, 0);
    else start = Math.min(start, len);

    if (end < 0) end = Math.max(len + end, 0);
    else end = Math.min(end, len);

    let result = [];
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
    return result;
  };
}

// ✅ Example
console.log([1, 2, 3, 4, 5].mySlice(1, 3)); // [2, 3]
console.log([1, 2, 3, 4, 5].mySlice(-3, -1)); // [3, 4]
