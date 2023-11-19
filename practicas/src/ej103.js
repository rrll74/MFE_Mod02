function f(input) {
  var result = input || (input === undefined ? "unknown" : "");
  return result;
}

console.log(f("Cadena")); // Cadena
console.log(f()); // Unknown
console.log(f(null)); // (Cadena vacía)
console.log(f(undefined)); // Unknown
console.log(f("0")); // 0
