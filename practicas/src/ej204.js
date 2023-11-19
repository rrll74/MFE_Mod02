// APARTADO A

var a = 1;
let b = 2; // No es visible en bloques

{
  try {
    console.log(a, b); // Lanza error porque b no está definida
  } catch (error) {}
  let b = 3;
  console.log(a, b); //1 3 <- 1 por "a" en global y 3 por "b" en bloque
}

console.log(a, b); // 1 2 <- ambos por su definición en global

() => { // No se llega a ejecutar porque no está inicializado (xxxx)()
  console.log(a);
  var a = 5;
  let b = 6;
  console.log(a, b);
};

console.log(a, b); // 1 2 <- ambos por su definición en global


console.log("");


// APARTADO B

var a = 1;
var c = 2;  // Se ha modificado b por c para que no haya confilcto con el apartado anterior

{
  try {
    let c = 3;
    console.log(a, c);
  } catch (error) {}
  let c = 3;
  console.log(a, c);
}

console.log(a, c);

(() => {
  var a = 5;
  console.log(a);
  let c = 6;
  console.log(a, c);
})();

console.log(a, c);