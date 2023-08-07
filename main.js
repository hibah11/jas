
let number = 4
if(number % 2 == 0){
console.log("The number is even");
}
else {
    console.log("The number is odd");
}

/**
 * 
 */



let grade = 95

if(grade >= 90){
console.log("your grade is A");
}

else if (grade >=80 && grade <90 ) {
    console.log("your grade is B");
} 

else if(grade <= 79 && grade >= 70 ){
console.log("your grade is C");
}

else if(grade <= 69 && grade >= 60){
console.log("your grade is D");
}

else if(grade <= 59){
    console.log("your grade is F");
}



let input = 15
    if (input % 3 === 0 && input % 5 === 0) {
      console.log("FizzBuzz");
    } else if (input % 3 === 0) {
      console.log("Fizz");
    } else if (input % 5 === 0) {
      console.log("Buzz");
    }





let sum = 0
for( let i = 1; i<= 10 ; i++){
 sum = Math.pow(i, 2)
 console.log(sum + 'square');
}

for( let i = 0; i<= 19 ; i++){
    console.log(i+=1);
   }

   for( let i = 1; i<= 24 ; i++){
    console.log(i+=1);
   }

/***/

let n = 8; 
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
string += j;
}
  string += "\n";
}
console.log(string);

/***/
function fibonacci(n) {
    let sequence = [0, 1];
  
 
    for (let i = 2; i < n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber); 
    }
  
    return sequence;
  }
  
 
 let sequenceLength = 20;
  let fibonacciSequence = fibonacci(sequenceLength);
  
  console.log(fibonacciSequence);


