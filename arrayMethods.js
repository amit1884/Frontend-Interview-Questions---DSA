const arr=[1,2,5,6,7,8]


// MAP
Array.prototype.myMap=function(cb){
    let res=[]
    for(let i=0;i<this.length;i++){
        res.push(cb(this[i],i))
    }
    return res
}

// FOREACH
Array.prototype.myForeach=function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i],i)
    }
}

// FILTER
Array.prototype.myFilter=function(cb){
    let res=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            res.push(this[i])
        }
    }
}

// REDUCE
Array.prototype.myReduce=function(cb,intitialValue){
    let acc=intitialValue
    for(let i=0;i<this.length;i++){
        acc=acc?cb(this[i],i):this[0]
    }
    return acc
}

