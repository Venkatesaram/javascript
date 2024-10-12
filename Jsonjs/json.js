let teashop ={
    name:"Star tea shop",
    address:"Sholinghur ,ranipet district,sholinghir thaluk",
    phone:8056107589,
    

    branchs:[
        {
        place:"sholinghur perumal kovil opposite",
        price:15,
        control:"Venkatesa ram s",
        },
        {
        place:"sholinghur Bus stop",
        price:20,
        control:"Chandru"},
    ]
};


// Example: Accessing data from the coaching center object

console.log(teashop.name);
console.log(teashop.address);
console.log(teashop.phone);
console.log(teashop.branchs[0]);
console.log(teashop.branchs[1]);
console.log(teashop.branchs[0].price);
console.log(teashop.branchs[0].place);
console.log(teashop.branchs[1].place);
console.log(teashop.branchs[0]);