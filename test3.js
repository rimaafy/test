function isLeapYear(year) {
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log("Tahun "+year+" merupakan tahun kabisat");
    } else {
      console.log("Tahun "+year+" bukan merupakan tahun kabisat");
    }
  }
  
  // enter year
  var input = prompt("Masukkan tahun:");
  isLeapYear(input);
  