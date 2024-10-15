//Immediately Invoking Function [iife] :

var Usersname ="Chandru";

(function(){
    var Usersname ="Venkatesa ram s(iife method)";
    console.log("iife printing:",Usersname);
})();

console.log("Global side same name(var name (Usersname)) also printing:",Usersname);