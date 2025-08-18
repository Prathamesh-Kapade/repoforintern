console.log("This is String in javascript");
 
const name="prahamesh";
const repoCount= 10;

console.log(name+ repoCount + "value");

console.log(`Hello ${name} your repo count is ${repoCount}`); //Template String 

const  user= new String("Prathamesh"); 

console.log(user.toLowerCase()); 
console.log(user.length); //length of string
console.log(user.charAt(5));
console.log(user.indexOf("h")); //index of character
console.log(user.substring(0, 5)); //substring from index 0 to 5
console.log(user.slice(0, 5)); //slice from index 0 to 5

  
const clg ="   DYP   ";
console.log(clg);
console.log(clg.trim()); //trim removes whitespace from both ends of a string


const url="https//prathamesh.com/profile%23about";
// console.log(url.replace("%23", "#"));
  
// console.log(url.includes('prathamesh'));

console.log(url.split(" "));
console.log(Symbol.split(" ")); //split string by space