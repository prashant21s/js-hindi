const name = "prashant"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is $ {repoCount}`);

const gameName = new String('prashant')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString);

const newStringOne = "   prashant   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));