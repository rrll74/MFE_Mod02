function subsets(word) {
  // let array = [];
  // for(let i = 1; i < word.length; i++) array.push(word.substr(i));
  // return array;
  return Array.from(word, (x, i) => word.substr(i)).splice(1);
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
