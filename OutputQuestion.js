var bar=1
function foo(){
    return this.bar++
}

const a={
    bar:10,
    foo1:foo,
    foo2:function(){
        return foo()
    }
}

console.log(a.foo1.call())
console.log(a.foo1())
console.log(a.foo2.call())
console.log(a.foo2())

// Output 1,10,2,3

// ===========================

console.log(1)

async function async1(){
    console.log(2)
    await async2()
    console.log(3)
}

async function async2(){
    console.log(4)
}

async1()
setTimeout(()=>{
    console.log(5)
})
new Promise((resolve,reject)=>{
    console.log(6)
    resolve()
}).then((res)=>console.log(7))

console.log(8)

// Output
// 1
// 2
// 4
// 6
// 8
// 3
// 7
// 5