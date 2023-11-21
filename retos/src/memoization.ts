const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

// Versión 1 - Usando varias líneas
// const memoize = (func) => {
//   const cache = {};
//   if (cache[func]) return cache[func];
//   else return (cache[func] = func());
// };

// Versión 2 - Todo en  una línea
const memoize = (func) => (this[func] ? this[func] : (this[func] = func()));

const memoized = memoize(expensiveFunction);
console.log(memoized); // Una única llamada // 3.1415
console.log(memoized); // 3.1415
console.log(memoized); // 3.1415

// Versión 3 - Con argumentos
let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoize2: Function = (func: Function) => {
  const cache = {};
  console.log(func, cache);
  // if (cache[func()]) {
  //   for (const i of cache[func()]) {
  //     let equal = true;
  //     for (const j of cache[func()][i]) {
  //       console.log(args);
  //     }
  //   }
  // } else {
  //   (cache[func()] ?? []).push([...args], func(...args));
  // }
};

// INCOMPLETO

const memoizedGreet: Function = memoize2(repeatText);
debugger;
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2
