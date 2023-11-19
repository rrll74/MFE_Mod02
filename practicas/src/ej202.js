// APARTADO A

const head = ([first]) => first;

const array = ["first", "second", "third", "forth"];

console.log(head(array));

// APARTADO B

const tail = ([first, ...others]) => others;

console.log(tail(array));

// APARTADO C

const init = ([...array]) => array.splice(0,array.length-1);

console.log(init(array));

// APARTADO D

const last = ([...array]) => array.splice(-1);

console.log(last(array));