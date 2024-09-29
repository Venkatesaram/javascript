// 1.IF condition
var rollnum = 25;
 
if (rollnum <30) {
    console.log("This is venkat");
};

// 2.If-else condition 

let example = 90;
 
if (example > 80 )
    console.log("It's correct");
else
    console.log("It's wrong");


 
//3.Switch condition

const days = 4;
 
switch (days) {
    case 1:
        console.log("This is first page");
        break;
    case 2:
        console.log("This is second page");
        break;
    case 3:
        console.log("This is thred page");
        break;
     case 4:
        console.log("This is sep 4 my birthday");
        break;
    default:
        console.log("Its one empty added page");
};



//4.ELSE-IF condition
  
let score = 95;

if (score >= 90) {
    console.log("Rank 1");
} else if (score >= 80) {
    console.log("Rank 2");
} else if (score >= 70) {
    console.log("Rank 3");
} else if (score >= 60) {
    console.log("Rank 4");
} else {
    console.log("Rank 5");
}


//5.Ternary

var id1= 100;

let result = id1 <= 101 ? "Positive" : "Negative";

console.log(`The id is ${result}.`);