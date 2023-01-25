function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // enter the factorial value
  var input = prompt("Masukkan nilai faktorial:");
  var result = factorial(input);
  console.log("Nilai desimalnya adalah " + result);
  