function func() {
  console.log("Prathamesh");
  console.log("Kapade");
}

//func();

//  function addTwoNumbers(num1,num2){//parameters
//         console.log(num1+num2)
//  }

function addTwoNumbers(num1, num2) {
  
//   let result = num1 + num2;
//   return result;

  return num1 + num2;
  console.log("close"); //not execute because the once return
}

const result = addTwoNumbers(3, 4); //arguments

//console.log(result);


function loginUser(username="ram"){
    if(!username){
        console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUser("prathamesh"))
//console.log(loginUser()) //undefined


function calculateCartPrice(...num1){ //Rest operator
    return num1
}

//console.log(calculateCartPrice(200,300,400,500))//[ 200, 300, 400, 500 ]

 
const user = {
    name:"prathamesh",
    age:20
}
 
//object
function handleObject(obj){
    console.log(`Username is ${obj.name} and age is ${obj.age }`)
}

//handleObject(user)
handleObject({
    name:"ram",
    age:35
})


//Array
const myNewArray=[100,200,300,400]

function returnSecond(getArray){
    return getArray[2]
}

//console.log(returnSecond(myNewArray))
console.log(returnSecond([800,700,600,500]))


