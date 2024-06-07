const accountId = 224353
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = 'Delhi'

//accountId = 2 // not allowed


accountEmail = "def@gmail.com"
accountPassword = "56789"
accountCity = "Patna"
let accountState;

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])