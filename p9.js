//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.
//ANSWER: 375 * 200 * 425 = 31875000.

//NOTE: n and m are < 500 because:
// Euclid's Formula on generating Pythagorean Triplets: a = m^2 – n^2, b = 2mn, c = m^2 + n^2
// m^2 - n^2 + 2mn + m^2 + n^2 = 1000 
// m(m+n) = 500
//And > 3 because the smallest Pythgorean Triplet is [3, 4, 5]. 

function abc() {
  for (var n = 3; n < 500; n++) {
    for (var m = 3; m < 500; m++) {
      var a = (m * m) - (n * n),
          b = 2 * m * n,
          c = (m * m) + (n * n);
      if (a + b + c == 1000) {
        return a * b * c;
      }
    }
  } 
}
console.log(abc());
