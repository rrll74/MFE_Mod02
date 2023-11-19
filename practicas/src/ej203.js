// APARTADO A

const concat = ([...a], [...b]) => [...a, ...b];

const array1 = ['peras', 'manzanas', 'uvas'];
const array2 = ['platanos', 'cerezas'];

console.log(concat(array1, array2));

// APARTADO B

const array3 = ['mango', 'melocoton'];
const array4 = ['guayaba', 'sandia', 'melon'];

const concatMulti = (first, second, ...others) => {
    const concatArray = concat(first,second);
    if(others.length > 0) return concatMulti (concatArray, ...others);
    else return concatArray;
};

console.log (concatMulti(array1, array2, array3, array4));