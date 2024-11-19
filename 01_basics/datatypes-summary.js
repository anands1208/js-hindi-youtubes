//  Primitive

// 7 Types : String, Number, Boolean, Null, Undefiend, Symbol, BigInt

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);


//const bigNumber = 434454643232434454656334n

// Refrance (Non primitive)

// Array, Object, Function


const heros = ["shaktiman", "juniorji", "sakalakabomboom"]
let myObj ={
    name: "Anand",
    age: 30,
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typeof bigNumber);
//console.log(typeof outsideTemp);
//console.log(typeof scoreValue);
//console.log(typeof myFunction);
console.log(typeof heros);


// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// numbers,boolean sab jate hai stack ke andar stack ke andar uska copy hi milta hai, 
// lekin ham heap ke andar value rakhte hai to hame uska refrance hi milta hai reafrance se mtlb hai jo changes krte hai original  value se hi hote hai

Stack (Premitive), Heap (Non-Premitive)

let myYoutubename = "AnandmohanYoutube"

let anothername = myYoutubename
anothername = "ananmohanji"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anand@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);