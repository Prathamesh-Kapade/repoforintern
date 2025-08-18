// #Primitive (call by value)

// 7 types : String, Number ,Boolean, Null, Undefined, Symbol, BigInt

const score = 100; 
const scoreValue = 100.5//NUMBER
const isLoggedIn = true; //boolean

const userName = "Prathamesh"; //string
const userAge = null; //null
let userAddress; //undefined

const uniqueId = Symbol("id"); //symbol
const anotherId=Symbol("id"); //symbol
const bigIntValue = 8901456789


//#Non-Primitive (reference types)

// Object, Array, Functions
 

const user =["Prathamesh", 20, true, null, undefined] ;
const userDetails = {
    name: "Prathamesh",
    age: 20,
    isLoggedIn: true,
    address: null,
    id: uniqueId
};

const myFunction = function() {
    console.log("Hello World");
}



//******* Stack and Heap Memory ******** */

//Stack (Primitive  ), Heap (Non-Primitive)

let userName5 = "Prathamesh"

let anothername= userName5
userName = "Kapade"

console.log(userName5); //Kapade
console.log(anothername); //Prathamesh



let userName1 = {
    email:"prathamesh@google.com",
    upi:"prathamesh@upi"
};

let userName2= userName1;

userName2.email = "sdfsdfsd"

console.log(userName1.email); //sdfsdfsd
console.log(userName2.email); //sdfsdfsd
