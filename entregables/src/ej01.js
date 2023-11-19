/*

###1. Array operations

#### Head

Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

*/

const array = ["first", "second", "third", "forth"];

const head = ([first, ...others]) => first;

console.log(`head: [${array}]`, head(array));

/*
### Tail

Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

*/

const tail = ([first, ...others]) => [...others];

console.log(`tail: [${array}]`, tail(array));

/*
#### Init

Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

*/
const init = (array) => array.slice(0, -1);

console.log(`init: [${array}]`, init(array));

/*
#### Last

Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.

*/
const last = (array) => array.slice(-1).join("");

console.log(`last: [${array}]`, last(array));
