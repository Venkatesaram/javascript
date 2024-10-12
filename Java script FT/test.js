// 1.How asynchronous calls are handled in javascript?
// 2.What is call stack & give example of its usage?
// 3.What are closures & Provide its implementation?
// 4.What are callback function with example?
// 5.Write an arrow function with multiple arguments & multiple statements?
// 6.Write an if statement with logical AND?
// 7.Write an if statement with logical NOt?
// 8.Differnce between function declaration & function expression?
// 9.differnce between var,let,const?
// 10.Explain call by value & call by reference?


//  1.How asynchronous calls are handled in javascript?

console.log("Hello everyone")

setTimeout(()=>{
    console.log( "asynchronous thread time print");
},2000);

console.log("This is venkatesa ram");

// *The asynchronous waiting in web API.

//    step1:Web API ( First call stack kulla vanta odaney web api pogum en nama Asynchronous program use panne irrukoom ->Asynchronous thread time print api ku pogum) next
//    step2:Call back queue(First in first out)
//    cb1:(cb1 asynchronous())
//    step3:Event loop call stack free ya iruntha odaney web API la irruka asynchronous thread time print yaduthu console la output ha 2s apram kuduthudoom ethu tha event loop works.



// 2.What is call stack & give example of its usage?
// *First in last out ,atha call stack. current haa yantha line of code excute aguthunu kattura place tha call stack..(In call stack we can where our code is executed..)

function first() {
   console.log("firstFunction");
    second(); //Calling second function
}

function second() {
    console.log("secondFunction");
    third(); //Calling third function
}

function third() {
 console.log("thirdFunction");
}

first(); //Initial function call



// 3.What are closures & Provide its implementation?

// *A closure is a function that has access to its outer function scope even after the outer function has ruturned.This means a closure can remember and access variabels and arguments of its outer funtion even after the function has finished.

function outer(){
    const name ="Venkatesa ram S";

function inner(){
    console.log(name);
}
return inner;
}

const closure= outer();
closure();


// 4.What are callback function with example?

// Callback --> A function that is passed as an parameter/argument to another function.

function mainFun(getCallFun){
    console.log('Main Function Executed');

    getCallFun();
}
function callback(){
    console.log('Callback Function Executed');
}

mainFun(callback);



// 5.Write an arrow function with multiple arguments & multiple statements?

const sum =(a,b,) =>{
    return a+b;
};

console.log(sum (626,872));



// 6.Write an if statement with logical AND?

// if statement are the code blocks that get executed when a condition evaluates to true (or false in the case of an else clause).
//  These actions are typically a set of instructions or operations that run when the if condition is satisfied.


// The logical AND operator (&&) is used to check if both conditions in an if statement are true. 
// The code block will only execute if all conditions connected by && are true.

const StudentsMark= 90;

if(StudentsMark>=80 && StudentsMark <= 100 ){
    console.log("High scores students.(Excellent students)");
}

else{
    console.log("This just empty additional page");
}



// 7.Write an if statement with logical NOt?

// The logical NOT operator (!) is used to reverse the truthiness of a condition. 
// If the condition is true, the ! operator will make it false..

let isRaining = false;

if (!isRaining) {
  console.log("It's not raining. You can go outside!");
}


// 8.Differnce between function declaration & function expression?

// 1. Function Declaration
// Definition: A standalone function that is hoisted.
// Hoisting: Can be used before it is defined.


Functiondecl(); // Works due to hoisting

function Functiondecl() {
  console.log("Hello from function declaration!");
}

// Function Declaration: Hoisted and can be called anywhere in the scope.



// 2.Function Expression
// Definition: A function assigned to a variable, not hoisted.
// Hoisting: Cannot be used before it is defined.

Welcome(); // Error: sayHello is not defined

const Welcome = function() {
  console.log("Hello from function expression!");
};

// Function Expression: Not hoisted, can only be called after its definition.


// 9.differnce between var,let,const?

/* 1. var
Scope: Function-scoped (or global if declared outside a function).
Hoisting: Variables declared with var are hoisted (moved to the top of their scope) but initialized as undefined.
Reassignment: Can be reassigned.
Redeclaration: Can be redeclared in the same scope (which can lead to bugs). */

var named = "Java";
var named = "Script";  // Allowed

if (true) {
  var x = 10;
}
console.log(x);  // 10 (x is function-scoped or global)


// 2. let
// Scope: Block-scoped (only available inside the block {} where it's declared).
// Hoisting: let is hoisted but not initialized until the line of code where it is declared (this creates a "temporal dead zone" where the variable cannot be accessed before the declaration).
// Reassignment: Can be reassigned.
// Redeclaration: Cannot be redeclared in the same scope.

let id = 48;
// let id = 50;  // Error: Cannot redeclare

if (true) {
  let y = 20;
}
// console.log(y);  // Error: y is not defined (block-scoped)



// 3. const
// Scope: Block-scoped (like let).
// Hoisting: const is also hoisted but not initialized (same temporal dead zone as let).
// Reassignment: Cannot be reassigned after its initial value is set.
// Redeclaration: Cannot be redeclared in the same scope.

const age = 30;
// age = 31;  // Error: Cannot reassign

if (true) {
  const z = 50;
}
// console.log(z);  // Error: z is not defined (block-scoped)


// 10.Explain call by value & call by reference?

// --> Value type:Value type will share the value of the variables(Value type shares only values not address memory)

var a = 100;

b=a;  //b=100;

a=200; //a=200;

console.log(a,b); // a=200; b=100;




//REFFERNCE TYPE
//Refference type shares both values and memory address 

var RamOne = [10,20,30];

var VenkiTwo = RamOne;

VenkiTwo.push(40,50);

console.log(RamOne==VenkiTwo); // true, this for same memory so if the value is true
var three=[10,20,30,40,50];
console.log(VenkiTwo==three) // false, this is an different memory address or difference reference here value is false

var copyArr=[...VenkiTwo]
copyArr.push(60);
console.log(copyArr) //[10,20,30,40,50,60]
console.log(VenkiTwo)// [10,20,30,40,50]









