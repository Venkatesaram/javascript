//variables

//Redeclar & Reassign (var variable)

var data ="Hello";
console.log(data);

var data ="Basics";
var data ="I am venkat";
console.log(data);     


//Can't declared but can assignment (let variable)

function ram(){
    let a=25;
    console.log(a);
     a=30;
    console.log(a);
}
ram();
 
//Can't be redeclar and  can't reassign (const variable)

const b=40;
console.log(b);


//Data types...

function datatypes(){

   //Number datatype

    var a=1000; 
    console.log(typeof(a));


   //String datatype

    var b="VENKATESH RAM";
    console.log(typeof(b));

    //Null
     
    var c= null;
    console.log(c);

    //Undefined

    var d;
    console.log( typeof(d));


    //Boolean

    var f= true;
    console.log(typeof(f));

    var E= false;
    console.log(typeof(E));

}

datatypes();


// Synchronous

function task1() {
    console.log("Hello");
    console.log("dudes");
    console.log("Javascript is")
    console.log("a scripting language")
}

task1(); //If a function takes a long time to execute, the entire program waits for that function to complete before moving on to the next task.Its synchronous..


//Asynchronous

function task2(){
console.log("Hello Everyone");

setTimeout(() => {
    console.log(" a scripting or programming language that allows you to implement complex features on web pages");  //If you perform an asynchronous task the rest of the code continues to run without waiting for the API request to complete.

}, 3000);

console.log("Javascript is");
}

task2();

