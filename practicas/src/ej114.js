// Aquí se usa una función existente en la clase Object que lo hace directamente
function values1(obj) {
  return Object.values(obj);
}

// Ejemplo:
console.log(
  values1({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"]

// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

// Aquí implemento una función a la que se le quitan las funciones de prototipo
function values2(obj) {
  const array = [];
  for (const key in obj) {
    if (typeof obj[key] !== "function") array.push(obj[key]);
  }
  return array;
}

// Tanto values1 como values2 funcionan correctamente
var john = new Person("John");
console.log(values2(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
