class LRUCache{
    constructor(capacity){
        this.capacity=capacity
        this.cache=[]
    }

    isCacheFull(){
        return this.cache.length===this.capacity
    }
    getItem(item){
        return this.cache.indexOf(item)
    }

    setItem(item){
        const itemIndex=this.getItem(item)
        if(itemIndex===-1){
            if(this.isCacheFull()){
                this.cache.pop()
                this.cache.unshift(item)
            }else{
                this.cache.unshift(item)
            }
        }else{
            this.cache.splice(itemIndex,1)
            this.cache.unshift(item)
        }
        console.log('cache',this.cache)
    }
}

let cache=new LRUCache(4)
cache.setItem(10)
cache.setItem(20)
cache.setItem(10)
cache.setItem(30)
cache.setItem(40)
cache.setItem(30)
cache.setItem(40)
cache.setItem(60)
cache.setItem(30)

