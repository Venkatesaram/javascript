// Hoisting with var
console.log(happy); 
var happy = 'Peace full life is great';
// After declaration
console.log(happy); 

/*------- Hoisting with let --------*/
// console.log(day); 
let year = '2024';
console.log(year); 

/*------- Hoisting with const ------- */
// console.log(hisGender); 
const hisGender = 'MALE';
console.log(hisGender); 

/*------- Hoisting with Function Declaration --------*/
Message(); 
function Message() {
  console.log("Hi, I'm Venkat");
}
// After Declaration
Message()

/*------  Hoisting with Function Expression  -------*/
console.log(expressionMessage); 
var expressionMessage = function() {
  console.log('Alert: This is a function expression!');
};

// After Declaration
expressionMessage(); 