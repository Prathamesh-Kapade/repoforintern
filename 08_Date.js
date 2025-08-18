let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());//13:30:49 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString());//2025-08-18T08:00:49.660Z
console.log(myDate.toISOString());//2025-08-18T08:00:49.660Z
//console.log(myDate.toJSON());
console.log(myDate.toLocaleString());//18/8/2025, 1:32:48 pm


let myCreateDate=new Date("01-14-2023")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();

console.log(newDate.getMonth()+1);
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday:"long",

})


