Promise.prototype.myPromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)   // First settled (fulfilled)
        .catch(reject);  // First settled (rejected)
    });
  });
};




Promise.prototype.myPromiseAllSettled = function (promises) {
  let results = [];
  let counter = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          counter++;
          if (counter === promises.length) {
            resolve(results);
          }
        });
    });

    if (promises.length === 0) {
      resolve([]); // Handle empty array immediately
    }
  });
};
