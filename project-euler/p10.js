//Summation of Primes
//Find the sum of all the primes below two million.
//ANSWER: 142913828922

function sumPrimes() {
  var sum = 0;
  
  for (var i = 2; i < 2000000; i++) {
    if (isPrime(i) === true) {
      sum += i;
    }
  }
  return sum;
  
  function isPrime(i) {
    for (var k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        return false;
      }
    }
    return true;
  }
} 

console.log(sumPrimes());
