if (!Array.prototype.mySplice) {
  Array.prototype.mySplice = function (start, deleteCount, ...itemsToAdd) {
    let arr = this;
    let len = arr.length;

    // Handle negative start
    if (start < 0) start = Math.max(len + start, 0);
    else start = Math.min(start, len);

    // Ensure deleteCount is valid
    deleteCount = Math.min(Math.max(deleteCount, 0), len - start);

    let removed = [];

    // ✅ Collect removed items
    for (let i = 0; i < deleteCount; i++) {
      removed.push(arr[start + i]);
    }

    // ✅ Create the new array with modifications
    let tail = arr.slice(start + deleteCount); // elements after removed ones
    arr.length = start; // truncate at `start`

    // ✅ Insert new items
    for (let i = 0; i < itemsToAdd.length; i++) {
      arr.push(itemsToAdd[i]);
    }

    // ✅ Append the tail back
    for (let i = 0; i < tail.length; i++) {
      arr.push(tail[i]);
    }

    return removed; // return removed elements (as per spec)
  };
}

// ✅ Example
let arr = [1, 2, 3, 4, 5];
console.log(arr.mySplice(2, 2, 10, 11)); // [3, 4]
console.log(arr); // [1, 2, 10, 11, 5]
