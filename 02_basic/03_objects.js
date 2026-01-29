// singleton => agar construstor se banta h toh singleton
// Object.create
// object literals => to declare an object variable


const mySym = Symbol("key1")


const JsUser = {
    name: "Shagun",
    "full name":"Shagun Pandey",
    [mySym]: "myKey1",
    age:20,
    location :"Japan",
    email: "shagun@IBM.com",
    isLoggin: false,

}
// console.log(JsUser.email);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

// console.log(JsUser["email"]);

// JsUser.email= "shagun@gmail.com"
// Object.freeze(JsUser)
// JsUser.email= "shagun11@gmail.com"
// console.log(JsUser.email)
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`)
}

console.log(JsUser.greetingTwo());








