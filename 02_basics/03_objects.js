//singleton

//object literals

const mySym = Symbol("key1")
const Jsuser = {
    name: "prashant",
    "full name": "prashant singh",
    [mySym]: "mykey1",
    age: "20",
    location: "gorakhpur",
    email: "prashant@akgec.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","satarday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySum]);

JsUser.email = "prashant@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "prashant@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
 console.log(JsUser.greeting);
 console.log(JsUser.greetingTwo);

