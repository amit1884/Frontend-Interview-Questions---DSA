const array=[1,2,[3,4,5,[6,7,8],[9,10],11],12,13]

const flattenArray=(arr,dept=0)=>{
    let res=[]
    arr.forEach(el => {
        if(Array.isArray(el)&&dept>0){
            res.push(...flattenArray(el,dept--))
        }else{
            res.push(el)
        }
    });
    return res
}