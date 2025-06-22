//task 12:



function foo(x) {
    if (x > 5) {
        return x;
    } else {
        return x + foo(x + 1);
    }
}  

console.log(foo(2))

//task 13:

function sumNums(size){

    let randomNum = [11,33,20,10,21,25,71,30] 
    let sum = 0
    
    
    for(i = 0; i < size; i++ ) {
       let randomArray = Math.floor(Math.random() * randomNum.length) 
       if(randomNum[randomArray] % 2 === 0) {
        sum += randomNum[randomArray]
       }
    return sum
   }
}

console.log(sumNums(50))




