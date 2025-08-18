const scrore =  100;

const num = Number(200);
console.log(num);//Number
console.log(typeof score);//undefined

const num1=new Number(score)''
console.log(typeof num); //object


console.log(num.toString().length);
console.log(num.toFixed(2)); //convert to string with 2 decimal places


const otherNumber=23.3534
console.log(otherNumber.toPrecision(4));//23.35

const hundreds=100000
console.log(hundreds.toLocaleString('en-In')); //1,00,000


//***************** Maths *********************//


console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.4));//4
console.log(Math.ceil(4.5));//5
console.log(Math.floor(4.4));//4
console.log(Math.sqrt(4));//2
console.log(Math.min(3,4,5,6));//3
console.log(Math.max(3,4,5,6));//6

console.log(Math.random());//from 0 To 1 
const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min+1))+min)