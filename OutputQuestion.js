// 1. =====================

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

// 2. ===========================

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

// 3. ===================
for(var i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}

// Output- 10 10 10 10 10 10 10 10 10 10

// 4. =======================
for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i)
    },0)
}

// Output- 0 1 2 3 4 5 6 7 8 9



