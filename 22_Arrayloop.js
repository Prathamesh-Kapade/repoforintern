// for of 

// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5]

for(const i of arr){
  //console.log(i)
}


const greetings = "Hello world"
for(const greet of greetings){
   //console.log(`each char is ${greet}`)
}

//Maps

// const map = new Map()
// map.set('IN',"India")
// map.set("USA","United states of America")
// map.set("USA","United states of America")

//console.log(map)


// for (const [key,value] of map){ /// we can not use the for in loop with map
//     console.log(key , ":-", value )
// }



//Object
// const myObject = {
//   'game1':'NFS',
//   'game2':'spiderman'
// }

// for (const [key,value] of myObject){
//   console.log(key, ':-', value)
// }


const myObject = [{
  js:"javascript",
  cpp:"c++",
  rb:"ruby",
},
  {
    py:"python"
  }
  
]

for(const key in myObject){
  //console.log(`${myObject[key]}`)
  //console.log(`${key}shortcut is for ${myObject[key]}`)
}




// for each loop 
//const names=["ab","cd","ef"]

// names.forEach(function (item){
//   console.log(item)
// })


function printMe(item){
  //console.log(item);
}
names.forEach(printMe)

// myObject.forEach((item)=>{
//  console.log(item.js)
// })


// const names=["ab","cd","ef"]

// const values =  names.forEach((item)=>{
//   //console.log(item);
//   return item
// })
// console.log(values);

          