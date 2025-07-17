// 1 , 2 :
    // ფუნქცია არის ინსტრუქციების ერთობლიობა რომელსაც ვარქმევთ რაიმე სახელს და ამის გამოძახება შეგვიძლია ნებისმიერ ადგილას 

// 3: 
     // code block არის { } - ში ჩასმული ინსტუქციები (კოდი) რომელიც ერთად სრულდება და  მისი გამოძახება ხდება function ენით რომელიც ატარებს ამ code block  ს 

// 4: Create a function that takes a string as an argument and greets the user. For example, if the function is called with "John," the function should return "Hello, John!"

let Gurgena = "Gurgenadze"

function greet(user){
    console.log(`hello ${user}`)
}
greet(Gurgena)

// 5: Create a function that takes a string as an argument and returns a string with the argument value in reverse. For example, if the function is called with the input "hello," the function should return "olleh." (Use a loop, not a method that does this in one step.)

function reverseString(text){
    return text.split('').reverse().join('')
}

console.log(reverseString("hello"))

// 6 : default argument მაშინ გამოიყენება როდესაც ჩვენ ფუნქციას არ ვაძლევთ მნიშვნელობას მაგალითად :

function person (name = "guest") {
    return "hello " +  name
}
console.log(person("gurgena"))  // აქ ჩვენ მივეცით მნიშვნელობა და შეცვალა 
console.log(person())  // აქ არ მიგვიცია მნიშვნელობა და გამოიყენა default argument ანუ guest.

// 7 : What is the scope and lifetime of a variable? 

    // scope ნიშნავს თუ საიდან აქვს პროგრამას წვდომა რომელიმე ცვლადთან, ანუ რომელი კოდის ნაწილში შეგიძლია გამოიყენო ცვლადი
    // variable არის ცვლადი რომელიც არის ყუთი რომელშიც არის ინფორმაცი შენახული მაგალითად 
        let name = "Gurgena" // Name ცვლადი Gurgena ინფორმაცია 
    // lifetime არის დრო, რაც ცვლადი არსებობს მეხსიერებაში, იგი შედის scope ში და ქრება როცა scope მთავრდება მაგალითად:
        function test() {
            let x = 10;  // x იქმნება როცა ფუნქცია გაიხსნება
                console.log(x);
            }            // ფუნქციის დამთავრების შემდეგ x წაიშლება

// 8 : What is a return value? 
        // return value არის მნიშვნელობა რომელმაც გარეთ გამოუშვა ფუნქცია როდესაც დაასრულა თავისი მოქმედება მაგალითად :
                function randomNumber(num){
                    num = Math.floor(Math.random() * 3)
                    return num
                }
                console.log(randomNumber())
              
// 9 : What is the return value of a function that does not have a return statement? 

        // როდესაც ფუნქციას არ აქვს მინიჭებული return ი იგი თავისით აბრუნებს undefined ს მაგალითად:
            
                function sayHello() {
                    console.log("hello")
                }
                let result = sayHello()
                console.log(result) // ეს იქნება undefined 

// 10 : Given the following function, find mistakes in the code and explain what the function is supposed to do:
                
function foo(x) {
    return x * 2;  // უბრალოდ return უნდა დავწეროთ
}
let x = 7;
 x = foo(x);
  console.log(x); 

 // 11 :  Given the following code, find and correct the mistake in the code
 
function bar(x = 8) {
   return y += 1;   // return აკლდა
}

function fu() {
    bar();
    return y *= 2;   // return აკლდა
}

let y = 7;
y = fu(y);   // (y =) აკლდა
console.log(y); // x should change!

// 12 : Given the following function, what is the return value of the function call foo(2)? Explain your answer

let z = 0 
function fa(z) {
if (z > 5) {
        return z;
    } else {
        return z + fa(z + 1);
    }
}
 console.log(fa(z))

 // 13 : Create a function that takes an array of numbers as an argument and returns the sum of the odd numbers in the array. (Use a loop, not a method that does this in one step.)

 function arr(){
     let randomArr = [2,3,5,4,6,7,9,8]
     let sum = 0
     for (let i = 0; i < randomArr.length; i++){
        if(randomArr[i] % 2 === 1){
            sum += randomArr[i]
        }
     }
     return sum

 }
 console.log(arr())

 // 14 : Create a function that takes a string as an argument and returns a boolean, true if string is a palindrome else false. A palindrome is a word that reads the same backward as forward. For example, if the function is called with "hello" it should return false, if the function receives "elle" it should return true, because elle backwards is also elle.


function palindrome(str){
    let revsersed = str.split("").reverse().join("")
    return revsersed === str
}
 console.log(palindrome("hello")) 


 Ispalindrome = (str) => {
    let revsersed = str.split("").reverse().join("");
    return revsersed === str;
 }
    console.log(Ispalindrome("ollo"))