// Input Array
const arr=[
    {region:'North',salesPerson:'Amit',product:'Laptop',amount:1000},
    {
        region:'South',salesPerson:'Mohit',product:'Monitor',amount:500
    },
    {
        region:'North',salesPerson:'Amit',product:'Keyboard',amount:500
    },
    {
        region:'North',salesPerson:'Aditya',product:'Playstation',amount:2000
    },
    {
        region:'South',salesPerson:'Mohit',product:'Race Simulator',amount:3000
    }
]

function solution(arr){
    let res={}
    for(let { region, salesPerson, product,amount} of arr){
        if(!res[region]){
            res[region]={}
        }
        if(!res[region][salesPerson]){
            res[region][salesPerson]={product:[],amount:0}
        }

        res[region][salesPerson].product.push(product)
        res[region][salesPerson].amount+=amount

    }

    return res
}

const res=solution(arr)
console.log('RESULT',res)

// Output

const result={
    North:{
        Amit:{
            product:['Laptop','Keypboard'],
            amount:1500
        },
        Aditya:{
            product:['Playstation'],
            amount:2000
        }
    },
    South:{
        Mohit:{
            product:['Monitor','Race Simulator'],
            amount:3500
        }
    }
}
