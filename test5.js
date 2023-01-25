let sentence = prompt("Masukkan kalimat:");

function checkLetterCount(sentence) {
  let letterCount = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter.match(/[a-zA-Z]/i)) {
      if (letter in letterCount) {
        letterCount[letter]++;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  console.log("Huruf\tJumlah");
  for (let letter in letterCount) {
    console.log(letter + "\t" + letterCount[letter]);
  }
  console.log("Jumlah huruf yang terpakai: ", Object.values(letterCount).reduce((a, b) => a + b, 0));
}

checkLetterCount(sentence);
