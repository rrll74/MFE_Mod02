/*
# Comprendiendo JS

## Cuestión 1

¿Existe alguna forma de que la expresión `x === x` de como resultado `false`?

RESPUESTA:
Sí, en NaN exclusivamente.
No encuentro ningún otro valor ni expresión en la que se de el resultado tal y como está escrito porque aunque ponga un objeto en la variable x seguiría teniendo la misma referencia.
Diferente es si en vez de poner la variable se pone el objeto completo en ambas partes de la igualdad. En ese caso, cada objeto tiene una referencia diferente y se les considera diferentes, por lo que sí podría darse ese caso también.
*/

const x = NaN;

console.log("NaN === NaN", x === x); // false

/*

## Cuestión 2

Habiendo resuelto la **Cuestión 1**, ¿como implementarías una función que compruebe si un determinado valor es `NaN`?
*/

const isNaNValue = (v) => {
  if (typeof v !== "number") return false;
  else return v !== 0 && !!v === !!NaN;
};

console.log("NaN", isNaNValue(NaN)); // true
console.log("null", isNaNValue(null)); // true
console.log("undefined", isNaNValue(undefined)); // true
console.log("0", isNaNValue(0)); // false
console.log("23.2", isNaNValue(23.2)); // false
console.log("texto", isNaNValue("texto")); // true

/*

## Cuestión 3

Habiendo resuelto la **Cuestion 2** ¿Existe alguna forma de que la expresión `!isNaNValue(x) && x !== x` de como resultado `true`?


const isNaNValue = v => ?

// ¿x?

console.log(!isNaNValue(x) && x !== x); // false

RESPUESTA:
El único valor que conozco que da diferente es NaN, si lo descartamos, entonces no sé que expresión puede dar ese resultado.


## Cuestión 4

¿Podrías dar con alguna forma de que la expresión `x + 1 === x - 1` arroje `true`?
*/

const y = Infinity;

console.log(`${y}+1`, `${y}-1`, y + 1 === y - 1); // true

/*
## Cuestión 5

Se te ocurre alguna forma de hacer que la expresión `x > x` de como resultado `true`?

const x = ¿?

console.log(x > x); // true

RESPUESTA:
Tras probar valores numéricos, de texto, objetos, Infinity, null, undefined y NaN, no se me ocurre ningún valor que cumpla esa condición.
*/
