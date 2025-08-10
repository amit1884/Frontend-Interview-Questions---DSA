function TaskQueue(priority) {
  this.priority = priority;
}
 
TaskQueue.prototype.run = async function(callback) {
  console.log("Run start");
 
  await Promise.resolve();
 
  setTimeout(() => {
    console.log("Inside setTimeout (macrotask)");
  }, 0);
 
  
  await callback.bind(this)();
 
  console.log("Run end");
};
 
function handler() {
  console.log("Handler this.priority:", this.priority);
}
 
const curriedHandler = (a) => {
  console.log("Curried layer 1:", a);
  return (b) => {
    console.log("Curried layer 2:", b);
    return async function () {
      await Promise.resolve();
      console.log("Inside async curried function");
      handler.apply(this);
    };
  };
};
 
const queue = new TaskQueue(10);
queue.run(curriedHandler(1)(2));
 
 
 
 
const hardBound = handler.bind({ priority: 99 });
 
 
setTimeout(() => {
  console.log("Timeout before call/apply");
  hardBound.call({ priority: 77 });  
  const bound = handler.bind({ priority: 88 });
  bound.apply({ priority: 66 });
}, 0);
 
 
 
 
const getLabel = (input) =>
  input ?? (input === 0 ? "zero" : "default");
 
console.log(getLabel(0));
console.log(getLabel(null));

// OUTPUT
// Curried layer 1: 1
// Curried layer 2: 2
// Run start
// 0
// default
// Inside async curried function
// Handler this.priority: 10
// Run end
// Timeout before call/apply
// Handler this.priority: 99
// Handler this.priority: 88
// Inside setTimeout (macrotask)