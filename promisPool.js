async function promisePool(tasks, poolLimit = 3) {
  const results = [];
  const executing = new Set();

  for (const task of tasks) {
    // Start a new task
    const p = Promise.resolve().then(() => task());
    results.push(p);

    // Add to executing set
    executing.add(p);

    // When it finishes, remove from set
    const clean = () => executing.delete(p);
    p.then(clean).catch(clean);

    // If limit reached, wait for one to finish
    if (executing.size >= poolLimit) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}


const sleep = (t, id) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Task ${id} done after ${t}ms`);
      resolve(id);
    }, t)
  );

const tasks = [
  () => sleep(1000, 1),
  () => sleep(500, 2),
  () => sleep(1200, 3),
  () => sleep(300, 4),
  () => sleep(700, 5),
];

// Run with concurrency = 2
promisePool(tasks, 2).then((res) => {
  console.log("All done:", res);
});
