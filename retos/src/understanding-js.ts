/*
# Comprendiendo JS

## Cuestión 1

¿Existe alguna forma de que la expresión `x === x` de como resultado `false`?
Sí, en NaN exclusivamente.
No encuentro ningún otro valor ni expresión en la que se de el resultado tal y como está escrito porque aunque ponga un objeto en la variable x seguiría teniendo la misma referencia.
Diferente es si en vez de poner la variable se pone el objeto completo en ambas partes de la igualdad. En ese caso, cada objeto tiene una referencia diferente y se les considera diferentes, por lo que sí podría darse ese caso también.
*/

const x = NaN;

console.log(x === x); // false

/*

## Cuestión 2

Habiendo resuelto la **Cuestión 1**, ¿como implementarías una función que compruebe si un determinado valor es `NaN`?
*/

const isNaNValue = (v) => v;

console.log(isNaNValue(NaN)); // true

/*

## Cuestión 3

Habiendo resuelto la **Cuestion 2** ¿Existe alguna forma de que la expresión `!isNaNValue(x) && x !== x` de como resultado `true`?

```js
const isNaNValue = v => ?

// ¿x?

console.log(!isNaNValue(x) && x !== x); // false

```

## Cuestión 4

¿Podrías dar con alguna forma de que la expresión `x + 1 === x - 1` arroje `true`?

cuando se pone (undefined + 1) resulta NaN. Cuando se pone (undefined - 1) ocurre lo mismo, pero al realizar la igualación no resulta porque, aunque arrojan el mismo valor son valores distintos.

```js
const x = ¿?

console.log(x + 1 === x - 1); // true
```

## Cuestión 5

Se te ocurre alguna forma de hacer que la expresión `x > x` de como resultado `true`?

```js
const x = ¿?

console.log(x > x); // true
```
*/
