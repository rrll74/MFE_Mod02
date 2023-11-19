function biggestWord(phrase) {
  let words = phrase.split(" ");
  let longest = "";
  words.forEach((element) => {
    longest = element.length > longest.length ? element : longest;
  });
  return longest;
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
