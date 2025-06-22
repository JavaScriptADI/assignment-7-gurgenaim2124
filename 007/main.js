// task 4:

function greet(name){
    console.log(`hello ${name}`)
}

greet("john")


// task 5:


function reverseString(argument) {
    return argument.split("").reverse().join("")
}

console.log(reverseString("hello"))

// task 10:

function foo(x) {
   return x * 2;            // აქ return სჭირდებოდა 
}

let x = 7;
x = foo(x);
console.log(x);

