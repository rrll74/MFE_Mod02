/*

### 3. Clone Merge

#### Clone

Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:

*/

const obj1 = {
  id: 1234,
  name: "Juan",
};

function clone({ ...source }) {
  return { ...source };
}

console.log(clone(obj1));

/*

#### Merge

Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.

Por ejemplo, dados estos 2 objetos:

*/

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

/*

el resultado de mezclar `a` sobre `b` sería:

*/

console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

/*

TIP: Puedes usar la función "clone" del apartado A.

*/

function merge(source, target) {
  return { ...b, ...a };
}
