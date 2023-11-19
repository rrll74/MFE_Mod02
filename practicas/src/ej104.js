// APARTADO A

function clone(source) {
    return {...source };
}

const obj1 = { id: 2883, name: "Juan"}

const obj2 = clone(obj1);
console.log(obj2); // comprobación de clonación
console.log(obj1 === obj2); // comprobación de diferentes instancias

// Apartado B

function merge(source, target) {
  return { ...target, ...source }
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

console.log(merge(a,b));