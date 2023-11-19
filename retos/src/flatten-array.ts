const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const flatten_array = (array) => array.flat(Infinity);

console.log(flatten_array(sample));

// FALTA EL TIPADO DE LA FUNCIÓN
