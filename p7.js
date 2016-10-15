//10001st Prime
//What is the 10001st prime number?
//ANSWER: 104743

function prime(num) {
  var primes = [];
  var i = 1;
  
  while (primes.length <= num) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  
  function isPrime(i) {
    for (var k = 2; k <= Math.sqrt(i); k++) {
      if (i % k === 0) {
        return false;
      }
    }
    return true;
  }
  
  return primes.pop();
}

console.log(prime(10001));
