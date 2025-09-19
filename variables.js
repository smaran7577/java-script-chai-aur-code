const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


//LET
// fixed. a=5 wrong but let a=5; correct 
let cgpa=9;
cgpa = cgpa+0.5;
console.log(cgpa);
//cgpa can be updtaed;
//no need to dd let if you want to change  cgpa 