// Function Expresssion

var Welcome = function(){
    console.log("This is function expression without argument and without return type:")
}

Welcome();



 

var WelcomeYouFE=function(name) {
    console.log(`This is ${name}! Using With arguments/parameters and with out return type in Function Expression`);
}

let Newname = 'Venkatesa ram';

WelcomeYouFE(Newname);





const multiplyFE = function(numberOne,numberTwo){

    return numberOne*numberTwo;
}

let output = multiplyFE(10,20);

console.log("With arguments/parameters and with return type in Function expression)  Result :" ,output);





var getcurrentusername = function (){
    return 'Venkatesa Ram S';
}

let userNamed = getcurrentusername();

console.log(userNamed);