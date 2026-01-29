// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);


// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined<0);


console.log("2"===2);

// primitive => original data nhi deya jata h copy kr k deya jata h data 
//7 type: string, number, boolean, null undefined, Symbol, BigInt
// Refernce (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman","doga"];
let myObj = {
    name : "histeh",
    age:22,

}

const myFunction = function(){
    console.log("Hello World");
    
}


//+++++++++++++++++++++++++++++++++++++++++++++++++

// Stack :-> copy milta h , Heap :-> reference millta h
// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "ShagunPandey"
let anotherName = myYoutubeName

anotherName = "Pandey"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email :  "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "shagun@gmail.com"

console.log(userTwo);
console.log(userOne.email);
console.log(userTwo.email)




// const id = Symbol('123');
// console.log(id);




