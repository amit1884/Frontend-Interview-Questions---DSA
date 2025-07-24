Array.prototype.myPromiseAll=function(promises){
    let result=[]
    let counter=0
    return new Promise((resolve,reject)=>{
       promises.forEach((promise,index) => {
        promise.then((res)=>{
            counter++
            result[index]=res
            if(counter===promises.length){
                resolve(result)
            }
        }).catch((err)=>{
            reject(err)
        })
       });
    })
}