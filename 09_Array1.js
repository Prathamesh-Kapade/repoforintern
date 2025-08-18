//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
//as those of the source object from which the copy was made.
//you change original array will change



//Deep copy of and object is a copy whose properties do not share the same references (point to the same underlying values)
//as those of the source object from which the copy was made.



//Array 

const myArr=[0,1,2,3,4,5,"hii",]
const myHeros = ["shaktiman", "naagraj"]

const myArr2= new Array(1,23,5,6,7)


console.log(myArr)

//Array Methods

myArr.push(6) //push element at the end 
myArr.pop() // pop last element
myArr.unshift("start"); // push element at the start
myArr.shift() //pop first element


console.log(myArr)
console.log(myArr.shift())


console.log(myArr.includes(6))
//console.log(myArr.indexof(3))


const newArr = myArr.join()

console.log(myArr)
console.log(typeof newArr) //string 



 

// slice - Return a section of an array
// splice - change the array by removing or replacing existing elements

console.log("A ",myArr)

const myn1=myArr.slice(1,3);
console.log(myn1)
console.log("B ",myArr)


const myn2=myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)                                                                                                                                                                                                                                                                                                                                                                                                                                  