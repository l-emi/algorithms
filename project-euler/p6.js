//Sum Square Difference
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
//ANSWER: 25164150

function sumSquare(n) {
  var a = [];
  var b = [];
  
  for (var i = 1; i <= n; i++) {
    a.push(i * i); //square all numbers
    b.push(i);
  }
  
  //fuction to add the numbers
  function sum(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    });
  }

  return sum(b)*sum(b) - sum(a);
}

console.log(sumSquare(100));
