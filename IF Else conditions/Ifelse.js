// Ifelse Condition (one condition method)


let weather="cold"

if(weather ==="hot"){
    console.log("Weather is hot");
}
else{
    console.log("weather is cold");
}




// Ifelse condition (two condition method)


let isRaining = false;
let isCloudy = true;

if (isRaining || isCloudy){
    console.log("Don't forget to take umbrella");
}
else {
    console.log("Sky is normal enjoy the weather");
}


//  Ifelse conditions (Multiple conditions)

let hour =18;

if(hour >=0 && hour<= 13){
    console.log("Good morning");
}
else if(hour>=13 && hour<=17){
    console.log("Good afternoon");
}
else{
    console.log("Good evening")
}


// Ifelse conditions (Multiple conditions (second try))


let price =55000;

if(price>=10000 && price<=20000){
    console.log("Buy a android mobile");
}
else if(price>=60000|| price<=55000){ 
    console.log("Buy a iphone mobile");
}
else if(price>=50000 && price<=10000){
    console.log("Buy basic mobiles");
}
else{
    console.log("You afford mobile phone now");
}


// Switch case

let grade ="A";

switch(grade){

    case "S":
    console.log("Super grade");
    break;

    case "A":
    case "B":
    console.log("Excellent grade");
    break;
    
    case "E":
    console.log("Just pass");
    break;    

    case "U":
    console.log("Failed grade");
    break;

    default:
        console.log("Unknown grade");
}


// Switch case marks use method

let marks =95;

switch (true){
    case marks >90:
    console.log("Super grade");
    break;

    case marks >50:
    console.log("Pass");
    break;

    case marks <50:
    console.log("Failed grade");
    break;

    default:
        console.log("Unknown Grede");
}


// New try switch case


let amount=16000;

switch(true){

    case amount>15000:
    console.log("Buying the android mobile");
    break;

    case amount>60000:
    console.log("60k Buy iphone mobile");
    break;

    case amount<10000:
    console.log("Buy Basic mobile");
    break;

    default:
    console.log("You can't afford mobile phone now");
}