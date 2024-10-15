// Higher order function:

//Takes another function as arguments:
//Return a functions:
//Take another function as arguments and returns a functions:


//1.Takes another function as arguments:
function Sums(NumOne,Numtwo,Callback){

    if (NumOne%2 == 0)
        NumOne = NumOne+1; // 25

    if (Numtwo %2 !=0)
        Numtwo = Numtwo -1; // 6

    return Callback(NumOne,Numtwo);
}

console.log("Higher order function(Takes another function as arguments)",Sums(24,6,multiply));



//2.Return a functions:

function outer(numberOne){

    function inner(numberTwo){
        return numberOne * numberTwo ;
    }

    return inner;

}

let FirstOne = outer(5);

console.log(FirstOne(2)); // 10
console.log(FirstOne(10)); // 50
console.log(FirstOne(5)); // 25



let SecondOne = outer(19);

console.log(SecondOne(5)); // 95
console.log(SecondOne(18)); // 342
console.log(SecondOne(50)); // 950



//Take another function as arguments and returns a functions:

function outerfunction(callbackOne,callbackTwo){

    function innerfunction(numberOne){
        return callbackOne(callbackTwo(numberOne));
    }
    return innerfunction;
}

let MultiplyBytwo = x => x*2;
let MultiplyBythree = x => x*3;

let Adding = outerfunction (MultiplyBytwo,MultiplyBythree);

console.log(Adding(10));
