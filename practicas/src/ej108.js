function includes(array, value) {
  return array.indexOf(value) !== -1;
  // Otra forma:
  // for (let index = 0; index < array.length; index++) {
  //   if (array[index] === value) return true;
  // }
  // return false;
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false
