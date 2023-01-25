function isPalindrome(word) {
    word = word.toLowerCase();
    var reverseWord = word.split("").reverse().join("");
    if(word === reverseWord) {
      console.log("Kata '"+word+"' merupakan palindrome");
    } else {
      console.log("Kata '"+word+"' bukan merupakan palindrome");
    }
  }
  
  // enter a word
  var input = prompt("Masukkan kata:");
  isPalindrome(input);
  