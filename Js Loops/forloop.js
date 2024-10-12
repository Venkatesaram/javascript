// For(initialExpression;condition;Step){
//     console.log("Number # 1");
// }
  
// 1.For loop(odd method)

for(var i=1;i<=40;i++){
    if(i%2 !==0){
        console.log("Odd numbers #"+i);
    }
}

// 2.For loop (Even number printing method)

for(let i=1;i<=20;i++){
    if(i%2 ==0){
        console.log("Even numbers #" +i);

    }
}


//3.For loop (basic method uses)

for(let i=1;i<=10;i++){
    console.log("Numbers print #" +i);
}

//4.For loop (Reverse method)

for(let i=10;i>=1;i--){
    console.log("Reverse printing numbers #"+i);
}


// 5.While loop (1to10 printing method while loop)

var i=1;

while(i<=10){
    console.log("Line by line numbers"+i);

i++;
}

//6.While loop (10 to 1(reverse) printing method while loop)

var i=10;

while(i>=1){
    console.log("reverse method" +i)

    i--;
}

// 7.while loop (odd numbers printing method)


var i=1;

while(i<=25){
    if(i%2 !==0){
        console.log("Odd number while method" ,i)
    }
    i++;
}



// 8.while loop (Even numbers printing method)


var i=1;

while(i<=25){
    if(i%2 ==0){
        console.log("Even numbers while method" ,i)
    }
    i++;
}


// 9.Do-while loop(basic method)

for(var i=1;i<=10;i++){
    if(i%2 !==0){
        console.log("Odd numbers whileloop #"+i);
    }
}

do{
     if(i % 2 !==0){
        console.log("Odd numbers Do-while #"+i);

}
i++;
}while(i<=12);


// 10.For in (basic method)(Object method)

const person={
    name:"Venkat",
    age:25,
    sex:"male"
};

for(let key in person){
    console.log(key+":", person[key]);
}


// Array method in for in loop

let colors =["Red","blue","green"];

for(let key in colors){
    console.log(colors[key]);
}


// For in loop(basic method)

let colors1 =["yellow","pink","orange"];

for(let index of colors1){
    console.log("color:" + index);
}





// 11.Objects js

let persons = {
name:"Venkatesa ram s",
age:24,
address:"valluvar street ,sholinghur",
sibling:{
    brother:"Balaji",
    sisters:"ammu , deepi"
}
}

console.log(persons.sibling.sisters)
