//Smallest Multiple
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//ANSWER: 232792560

function smallestMultiple(min, max) {
  
  var range = []; //divisors
  for (var x = min; x <= max; x++) {
    range.push(x);
  }
  
  var a = range[0];
  for (var i = 1; i < range.length; i++) {
    var b = range[i];
    var c = a;
    
    //as long as a & b are positive numbers and NOT zero, the loop goes on
    //get the remainder
    while (a && b) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    a = c * range[i] / (a + b);
  }
  return a;
}

console.log(smallestMultiple(2, 20));
