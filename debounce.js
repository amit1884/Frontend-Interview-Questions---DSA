const debounce = (fun, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer); // clear previous timer
        timer = setTimeout(() => {
            fun.apply(this, args);
        }, delay);
    };
};