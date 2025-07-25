// Level - 1
const curry=(a)=>{
    return (b)=>{
        return a+b
    }
}

// Level - 2
const infiniteCurry = (a) => {
  return (b) => {
    if (b !== undefined) {
      return infiniteCurry(a + b);
    } else {
      return a;
    }
  };
};

console.log(infiniteCurry(1)(2)(3)()); // 6
console.log(infiniteCurry(10)(-5)(5)()); // 10
console.log(infiniteCurry(5)(0)(10)()); // 15 ✅ (works with 0 now)

// Level - 3
function infiniteCurryWithoutExtraCall(a) {
  const fn = (b) => infiniteCurry(a + b);
  fn.valueOf = () => a; // allows implicit conversion
  fn.toString = () => a; // for console.log
  return fn;
}

console.log(infiniteCurry(1)(2)(3));

// Level - 4

function infiniteCurryWithMultipleArgs(...args) {
  const sum = args.reduce((acc, val) => acc + val, 0);

  return function next(...nextArgs) {
    if (nextArgs.length > 0) {
      return infiniteCurry(sum + nextArgs.reduce((acc, val) => acc + val, 0));
    } else {
      return sum;
    }
  };
}

console.log(infiniteCurry(1, 2)(3, 4)(5)());    // 15
console.log(infiniteCurry(10, 20)(30)(40, 50)()); // 150
console.log(infiniteCurry(5, 5)(0)(10)());        // 20 ✅ works with 0


// Level - 5

function infiniteCurryWithMultipleArgsWithoutExtraCall(...args) {
  let sum = args.reduce((acc, val) => acc + val, 0);

  function next(...nextArgs) {
    if (nextArgs.length === 0) return sum;
    sum += nextArgs.reduce((acc, val) => acc + val, 0);
    return next;
  }

  next.valueOf = () => sum; // for arithmetic
  next.toString = () => sum; // for console.log
  return next;
}

// ✅ Works without final ()
console.log(+infiniteCurry(1, 2)(3, 4)(5)); // 15 (unary + forces valueOf)
console.log(String(infiniteCurry(10)(20, 30))); // "60"