
//***********Filter*************/

const num=[2,3,4,5,6,7]
//const newnum=num.filter((num)=> num > 5)

// const newnum=num.filter((num)=>{
//      return  num < 3
// })

// const newnum = []

// num.forEach((num)=>{
//     if(num>4){
//         newnum.push(num)
//     }
// })

// console.log(newnum)


let  usernum=num.filter((n)=> n===3)
usernum=num.filter((n)=>{
    return n===2
})
//console.log(usernum)




//**********map************//

const n=[5,4,3,2,7]
const  n1=n.map((n2)=>{ return n2+2})
//console.log(n1)

// let n4=[]

// const n5=n.forEach(n=>{
//     n4.push(n*2)
//     console.log(n4)
//     }
    
// )

const n7=n
          .map((n)=>n*5)
          .map((n)=>n+1)
          .filter((n)=>n>20)
//console.log(n7)





//************Reduce**************/

 const number =[5,6,7]

//  const myTotal=number.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
//  },0)


const myTotal = number.reduce((acc,curr) => acc+curr,0)

 console.log(myTotal)
