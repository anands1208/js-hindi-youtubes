const accountId =  12345
let accountEmail = "anandmohan1208@gmail.com"
var accountPassword = "54321"
accountCity = "Dewas"
let accountState;

// accountId = 2  // not alloweed

accountEmail = "mohananand@gmail.com"
accountPassword = "98765"
accountCity = "Indore"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])