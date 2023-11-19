/*

### 2. Concat

Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

*/

const array1 = ["first", "second", "third", "forth"];
const array2 = ["fifth", "sixth", "seventh", "eighth"];

const concat = (a, b) => [...a, ...b];

console.log(`concat ${array1} ${array2}`, concat(array1, array2));

/*

#### Opcional

Implementa una nueva versión de `concat` donde se acepten múltiples arrays de entrada (más de 2). No utilices el método `Array.prototype.concat`.
*/

const array3 = ["one", "two", "three", "four"];
const array4 = ["five", "six", "seven", "eight"];

// Resultado posible 1
// const concat_multiple = (...arrays) => {
//   retorno = [];
//   arrays.forEach((array) => {
//     array.forEach((valor) => retorno.push(valor));
//   });
//   return retorno;
// };


// Resultado posible 2
const concat_multiple = (...arrays) => {
  let retorno = [];
  arrays.reduce((acc, array) => {
    // console.log(array);
    array.reduce((accv, valor) => {
      retorno.push(valor);
    }, acc);
  }, []);
  return retorno;
};

console.log(
  `concat_multiple ${array1} ${array2} ${array3} ${array4}`,
  concat_multiple(array1, array2, array3, array4)
);
