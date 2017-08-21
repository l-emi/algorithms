//Largest Palindrome Product
//Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalin() {
  var a, //first number
      b, //second
      c, //product
      largestFound = 0;
  
  for (a = 999; a > 100; a--) {
    for (b = a; b > 100; b--) {
      c = a * b;
      if (palinCheck(c)) { //if c is a Palindrome
        if (c > largestFound) { //and is the largest number found so far
          largestFound = c;
        }
      }
    }
  }
  return largestFound;
  
  //checks for palindromes
  function palinCheck(c) {
    return c == c.toString().split("").reverse().join("");
  }
}
