// control flow

// if
// const temp = 40

// if (temp === 40){
//     console.log("less that 50")
// }else{
//     console.log("temp is greater than 50")
// }

// console.log("Executed compulory")
//<,>,<=,>=,==,!=,===,!==

// const score = 200

// if (score > 100){
//     let power="fly"
//     console.log(`user power ${power}`)
// }
// console.log(`user power p ${power}`)

const balance = 10000;
// if (balance > 500) console.log("test"), console.log("test2");

// if(balance > 500 ){
//     console.log("less than ");
// }else if (balance < 750){
//     console.log("less than 900")
// }else{
//     console.log("less than 120000")
// }




// const month = 3

// switch(month){
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("febuary")  
//         break;
//     case 3:
//         console.log("march")
//         break;
//     default:
//         console.log("wrong number")      
// }


const userEmail = []

if(userEmail){
    console.log("Got email")
} else{
    console.log("Don't have user email")
}



/* falsy values   */
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN


/* Truthy values  */
// "0", 'false', " ", [], {}, function(){}

//for array
// if(userEmail.length === 0){
//     console.log("Array is empty")
// }


//for object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty")
}




//Nullish Coalscing Operator (??)
let val1;
//val1=5 ?? 10
//val1=null ?? 10 //10
//val1=undefined ?? 20  //20

//val1 = null ?? 10 ?? 20 // first value-10 

console.log(val1)


 
//Terniary Operator
const isLoggedin = false
isLoggedin==true ? console.log("You logged in ") : console.log("Please Logged in")
