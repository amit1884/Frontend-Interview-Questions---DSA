class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(item) {
        if (!this.cache.has(item)) return -1;
        const value = this.cache.get(item);
        this.cache.delete(item);
        this.cache.set(item, value); // move to MRU
        return value;
    }

    set(item, value = true) {
        if (this.cache.has(item)) {
            this.cache.delete(item);
        } else if (this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys().next().value); // remove LRU
        }
        this.cache.set(item, value);
        console.log("cache:", [...this.cache.keys()]);
    }
}
