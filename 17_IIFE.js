//Immediately Invoked Function Expression (IIFE)

 (function chai(){ //named IIFE
    console.log("DB Connected");
 })();  //for global scope variable affect


//  (function aurcode(){
//     console.log(`db connected`)
//  })()

 ((name)=>{ // unnamed IIFE
    console.log(`db connected ${name}`)
 })("prathamesh")
