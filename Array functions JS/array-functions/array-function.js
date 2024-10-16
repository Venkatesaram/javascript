let fruits = ['Apple', 'mango','orange' , 'grapes' ,'Kiwi','guava'];

// 1.insert into an array end:
fruits.push("Ooty apple");
console.log(fruits);

//2.Insert an element at beginning::
fruits.unshift('Cerry');
console.log(fruits);

//3.Delete an item from array at the end:
fruits.pop();
console.log(fruits);  

//4.Delete an item from array at the beginning:
fruits.shift();
console.log(fruits);

//5.Join the array elements:

let fruitsjoin = fruits.join('  ');
console.log(fruitsjoin);


//6.Splicing an array (Change the exiting array)

fruits.splice(1,1,'Rambutan');
console.log(fruits);


//7.Slicing of an array(Takes the portion of array without changing the existing array)

const slicedArraywithEnd = fruits.slice(0,1);
console.log(slicedArraywithEnd);

const slicedArraywithOutEnd = fruits.slice(1);
console.log(slicedArraywithOutEnd);


//8.Find a element/item in an array:

let Findtheitem = fruits.includes('Cerry');
console.log(Findtheitem);


//9.Loops in array:

// Arrow function method 

fruits.forEach(items =>{
     console.log(items);
 })


// Anonymous function method

 fruits.forEach(function(item){
     console.log(item);
 })



 fruits.forEach((item,index)=> console.log("Index:"+index+ 'value :  '+item));


 fruits.forEach((item,index)=>{
  console.log("Index:"+index+ 'value :  '+item);
 }) 


 //10.Map functions:

 let FruitsList = fruits.map(function(value,index){
    return index;
 })
console.log(FruitsList);


let FruitsList3 = fruits.map((value,index)=>index);
console.log(FruitsList3);


// Map Even type viewing method:

let evenIndex = FruitsList3.map(value =>{

    if(value%2==0)
    return value;
})

console.log(evenIndex); // 0,2,4



//Map another method:

let multiplytype = FruitsList3.map(value =>{

    return value*2;

})

console.log(multiplytype); // 0,2,4,6,8,10




// 11.Array of object:

const bikes = [
    {
     Bike_name: "R15",
     Price : 200000,
     model :2024,
     Mileage : '60 kmpl',
     CC:150
     
    },

    {
     Bike_name:"Ninja650",
     price : 450000,
     model :2024,
     Mileage : '25 kmpl',
     CC:650
    },

    {
    Bike_name:"Royal Enfield Thunderbird 350X",
    price: 250000,
    model:2024,
    Mileage : '40 kmpl',
    CC:350

    }, ];


    console.log(bikes);


    // let bikeprice = bikes.map(value=>{
    //     return value.price;
    // } )

    // console.log(bikeprice);


    let bikename = bikes.map(value=>value.Bike_name);
    console.log(bikename);

    let bikesmodel= bikes.map(value=>value.model);
    console.log(bikesmodel);



//12.Filter functions:

let evenIndexofArray = fruits.filter(function(value,index) {
    if(index%2==0)
    return value;    

})

console.log(evenIndexofArray);



let speed = bikes.filter(value =>{
    return value.CC < 200;                  //same
})

console.log(speed);


let powerbike = bikes.filter(value =>{      //same 
    if(value.CC > 500)
        return value;
})



console.log(powerbike);


//13.Some Function:

//It will return true if any of the condition true (or) satisfies..
//The some() array method in JavaScript is used to check if at least one of the elements passes the callback test or not.

// same outputs but different codes:

let FitTomyCost = bikes.some(value => value.price >= 150000 <= 200000);   
console.log(FitTomyCost);                                                          



let Models = bikes.some(function(value){
    return value.model >=2034 <=2024;
})

console.log(Models);



let Mileagebike = bikes.some(value=> {
    return value.Mileage > '50 kmpl';
})

console.log(Mileagebike);



// 14.Every Function:

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value.


let EveryModels = bikes.every(value => value.model >2023);

console.log(EveryModels);



// 15.Basic Functions (Arrays): 

let ArrAys = [10,20,30,40,50]
console.log(ArrAys);


//Reverves (method):

let ReverVesmethod = ArrAys.reverse();
console.log(ReverVesmethod);


//Reduce (method):
//Returns an single value based on provided function.

let ReduceFullval = ArrAys.reduce((value,index)=> value+index,0);
console.log(ReduceFullval);


//Fill Function:

let FilledFunction = ArrAys.fill(25,3,4)
console.log(FilledFunction);