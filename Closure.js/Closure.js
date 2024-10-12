function outer(){
    const name="Venkatesa Ram S";
function inner(){
    console.log(name);
}
return inner;
}

const closure=outer();
closure();

//A closure is a function that has access to its outer function scope even after the outer function has returned.
// This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

