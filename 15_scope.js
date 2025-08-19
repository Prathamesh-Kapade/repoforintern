var c=300
let a  =300

if(true){
    let a = 10
    const b =20
    //console.log(("Inner",a))
}

//console.log(a)
//console.log(b)
//console.log(c)



function one(){
    const username = "prathamesh";

     function two(){
       const website = "google";
       console.log(username);
    }
    //console.log(website);

    two()
}

one()



if(true){
    const username="prathamesh"
    if(username === "prathamesh"){
        const website = "google"
        console.log(username + website)
    }
    //console.log(website);
}

//console.log(username)


console.log(addone(5))
function addone(num){
    return num + 1
}


console.log(addTwo(5)) // error because store in the variable
const addTwo = function(num){
    return num + 2
}


