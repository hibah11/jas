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


