function zipObject(keys, values) {
  let obj = {};
  for (let index = 0; index < keys.length; index++)
    if (values[index]) obj[keys[index]] = values[index];
  return obj;
}

// Ejemplo
console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
); // {spanish: "hola", english: "hi", french: "salut"}

// Ejemplo:
console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
