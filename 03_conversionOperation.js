let score ="33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); 



//"33" => 33
//"33abc" => NaN=>type of NaN is number
//ture=> 1; false=>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=> true;0=> false
//""=> false
//"abc"=> true

let someNumber=22;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


//************ Operations **************

let value =3
let negValue = -value;
//console.log(negValue); //-3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3);

let str1 = "Prathamesh";
let str2 = "Kapade";
let str3 = str1 + " " + str2;
console.log(str3); 

console.log("1"+3);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(true);//true
console.log(+true);//1
console.log(true+1);//error
console.log(+"");//0


let gameCounter=100
++gameCounter;
console.log(gameCounter); 