// const tinderUser = new Object()  //singleton object- only one instance 


const tinderUser={} //non singleton object

tinderUser.id="123abc"
tinderUser.name="prathamesh"
tinderUser.isloggedin=true


//console.log(tinderUser)

const regularUser = {
    email:"sdfsdf",
    fullname:{
        userfullname:{
            firstname:"prathamesh",
            lastname:"kapade"
        }
    }
}

//console.log(regularUser.fullname?.userfullname)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3 = Object.assign({},obj1,obj2)//({target},source) //Object.assign() is static method copies all enumerable own properties fro one or more source objects to a target object.
//return modified target object

//const obj3={...obj1,...obj2}
//console.log(obj3)




const uers=[
   {

   }
]



console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isloggedin'));