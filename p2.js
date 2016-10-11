//Even Fibonacci numbers
//Return the sum of all even Fibonacci numbers
//Sum has to be less than 4 million

function fibs() {
  var arr = [1, 2, 3];
  var even = [2];
  var sum = 2;
  var c;
  
  for (var i = 2; sum < 4000000; i++) {
    c = arr[i] + arr[i - 1];
    arr.push(c);
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
      sum += arr[i];
    }
  }
  return sum;
}
