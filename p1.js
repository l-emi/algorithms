//Multiples of 3 and 5

function multiples(n) {
  var arr = [];
  var total = 0;
  for (var i = n-1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
      total += i;
    }
  }
  return total;
}
