// Single statements arrow function:

let multiplyAr = (numberOne,numberTwo) => numberOne*numberTwo;

console.log("(Arrow function single statement)Result:",multiplyAr(30,10));


let singlepara = x => x*10;
 console.log("Arrow function without()using method...Result:",singlepara(10));

let withNoargument=()=> console.log("Arrow funtion without argument");


//Multi statement:

let multiStatement =(MultiOne,MultiTwo) =>{

   const Multisum = MultiOne * MultiTwo;
   return Multisum;

}

// let results = multiStatement(292,2)

console.log("Multi statement arrow functions ...Result:",multiStatement(626,2));


//Arrow function with call back:

setTimeout(() => {
    console.log("Arrow function with call back")
    
},3000);


//Returning an Object:

let userDetails =()=>({name:"Venkatesa ram",id :4});

