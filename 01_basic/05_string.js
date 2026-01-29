const name = "Shagun"
const repCount = 20

//console.log(name + repCount + "Value")

console.log(`Hello my name is ${name} and my repoCount is ${repCount}`);
const gameName = new String('Shagun');
//console.log(gameName.__proto__); // output => {} :-> object
const newString =gameName.slice(-8,4);
console.log(newString);// output=> Shag
// subString => can't give -ve value
const url = "hhtps://shagun.com/shagun%20"

console.log(url.split('/'));


