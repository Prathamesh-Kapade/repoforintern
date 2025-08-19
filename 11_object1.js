
//singleton
//Object.create



//object literals

const mySym = Symbol("key1")

const jsUser ={
    name:"Prathamesh",
    [mySym]:"mykey1",  //for declaring the syntax of symbol
    age:"20",
    location:"kolhapur",
    email:"prathamesh@gamil.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Saturday"]
}

// console.log(jsUser.age)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email="prathamesh@google.com"
//Object.freeze(jsUser)// make an object immutable
//console.log(jsUser)


jsUser.greeting = function(){
    console.log("Js")
}

jsUser.greetingtwo = function(){
    console.log(`Hello js ,${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo())

