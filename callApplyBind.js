Function.prototype.myCall=function(obj,...args){
    obj.fn=this
    obj.fn(...args)
}

Function.prototype.myApply=function(obj,...args){
    if(!Array.isArray(...args)){
        throw new Error('Args not an array')
    }
    obj.fn=this
    obj.fn(...args)
}


Function.prototype.myBind=function(obj,...args1){
    obj.fn=this
    return function(...args2){
        obj.fn(...args1,...args2)
    }
}