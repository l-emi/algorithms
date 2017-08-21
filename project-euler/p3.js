//Largest Prime Factor

function largestPrime(num) {
  var n = Math.ceil(Math.sqrt(num));
  
  //checks if number is a prime
  function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  //is n odd? if not, subtract 1
  n = (n & 1) === 1 ? n : n - 1;
  //while the number isn't divisible by n and isn't a prime
  //substract two
  while (!(num % n === 0 && isPrime(n))) {
    n -= 2;
  }
  return n;
}
