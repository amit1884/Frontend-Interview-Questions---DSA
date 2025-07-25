const throttle = (fun, delay) => {
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fun.apply(this, args);
        }
    };
};
