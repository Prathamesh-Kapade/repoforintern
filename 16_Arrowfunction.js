const user = {
    username :"prathamesh",
    price:2323,

    welcomeMessage: function(){
        console.log(`${this.username} ,  welcome to webstite`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()


//console.log(this)

//Note: this can not use with the function like
function chai(){
    let username="prathamesh"
    console.log(this.username)//undefined

    console.log(this)// we can use
}
//chai()

// const chai=function(){
//     let username="prathamesh"
//     console.log(this.username);
// }



const chai1=()=>{
    let username="prathamesh"
    console.log(this);//{}
}
//chai1()




// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//const addTwo=(num1,num2)=> (num1+num2) //implicit return 


const addTwo=(num1,num2)=>({username:"prathamesh"})//for return object
console.log(addTwo(3,4))

// const myArray = [2,4,6,8]
// myArray.forEach(()=>)