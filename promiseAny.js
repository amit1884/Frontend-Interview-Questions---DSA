Promise.prototype.myPromiseAny = function (promises) {
  return new Promise((resolve, reject) => {
    let errors = [];
    let rejectedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value); // As soon as any promise resolves, resolve the whole thing
        })
        .catch((err) => {
          errors[index] = err;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};
