// task 11:
let x = 7;                 // ეს global scope გავხადეთ

function bar() {
    x += 1;
}

function foo() {
    bar();
    x *= 2;
}

foo();
console.log(x); // x should change!
