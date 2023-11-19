// APARTADO A

function f() {
  console.log(a); // a no definida, pero se declara automáticamente al inicio -> undefined
  console.log(g()); // funcion g, aún no definida (no se comporta igual dentro de funciones que en la definición general), pero se declara automáticamente al inicio -> undefined

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a); // Ya sí está difinida "a" y se muestra su contenido
}

f();

// APARTADO B

var a = 1; // Se define en el ámbito de este módulo

(function () {
  console.log(a); // "a" no está definida, en el ámbito de esta función ni en el objeto Window, pero se declara automáticamente al inicio -> Undefined
  var a = 2; // Se define "a", sólo en el ámbito de esta función
  b = 4; // Se define "b" en el ámbito del objeto Window
  var c = 3; // Se define "c", sólo en el ámbito de esta función
})(); // Esta función se declara como autoejecutable

console.log(a); // Es visible en el ámbito de este módulo -> 1
console.log(b); // Es visible en el ámbito global desde el objeto Window -> 4
// Si se descomenta la siguiente línea lanza un error de referencia
// console.log(c); // Se definió en el ámbito de la función por lo que no está visible aquí ni declarada o asignada en ningún punto fuera de funciones, por lo que lanza error al tratar de referenciarla

// apartado c

f(); // Aunque es declarada después el compilador coloca todas las funciones y las da como declaradas
var a = 1; // Se defina "a" dentro del ámbito del módulo

function f() {
  console.log(a); // Al no declararse "a" en esta función se toma la global
  b = 4; // Se define "b" en el ámbito global del objeto Window
  var c = 3; // Se define "c", sólo en el ámbito de esta función
}

console.log(a); // Es visible en el ámbito de este módulo -> 1
console.log(b); // Es visible en el ámbito global desde el objeto Window -> 4
// Es visible en el ámbito global desde el objeto Window -> 4
// Si se descomenta la siguiente línea lanza un error de referencia
// console.log(c); // Se definió en el ámbito de la función por lo que no está visible aquí ni declarada o asignada en ningún punto fuera de funciones, por lo que lanza error al tratar de referenciarla
