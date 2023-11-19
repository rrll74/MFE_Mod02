function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

// APARTADO A

f("JS rocks!", { b: "b" }); // 2
// JS rocks! true
// b false ¿?
// 100 false

// APARTADO B
f({ b: "b" }); // 1
// {b: "b"} true
// undefined true
// 100 false

// APARTADO C
f("JS sucks!", null, 13); // 3
// JS sucks! true
// no es un valor del que se pueda extraer la propiedad b por lo que se provoca un ERROR DE REFERENCIA al hacer destructuring
// 13 true
