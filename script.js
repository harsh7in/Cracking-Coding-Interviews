// The ability using functions as values 
// The ability to pass function as arg 
//  and using as parameter in another function.

function xyz(){
    console.log("Function xyz")
}


var harsh=function (paramater){
    return function (){
        console.log("Returned after param")
    }
}


console.log(harsh(xyz));


