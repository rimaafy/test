let sentence = prompt("Masukkan kalimat:");

let newSentence = sentence.replace(/[^A-Za-z0-9 ]/g, "");
console.log(newSentence.replace(/\s/g, ""));