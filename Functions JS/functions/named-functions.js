// Functions and its types

// 1.Named funtions or Functions declarations:

// // 1.With out arguments/parameters and without return types:

function Welcome(){
    console.log("With out arguments/parameters and without return types");
}
Welcome();

// // 2.With arguments/parameters and with out return types:

function WelcomeYou(name){
    console.log(`This is ${name}! Using With arguments/parameters and with out return type`);
}

let myName = 'Venkatesa ram';

WelcomeYou(myName);


//3. With arguments/parameters and with return types:

function multiply(numberOne,numberTwo){

    return numberOne*numberTwo;
}

let result =multiply(12,5);

console.log("(With arguments/parameters and with return type)  Result :",result);


//4. Without argument/parameter and with return type:

function getcurrentusername(){
    return 'Venkatesa Ram S';
}

let userName = getcurrentusername();

console.log(userName);


 



