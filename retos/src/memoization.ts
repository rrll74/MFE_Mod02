const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
};

// Versión A - Usando varias líneas
const memoizeA = (func) => {
  const cache = {};
  if (cache[func]) return cache[func];
  else return (cache[func] = func());
};

const memoizedA = memoizeA(expensiveFunction);
console.log(memoizedA); // Una única llamada // 3.1415
console.log(memoizedA); // 3.1415
console.log(memoizedA); // 3.1415

// Versión B - Todo en  una línea
const memoizeB = (func) => (this[func] ? this[func] : (this[func] = func()));

const memoizedB = memoizeB(expensiveFunction);
console.log(memoizedB); // Una única llamada // 3.1415
console.log(memoizedB); // 3.1415
console.log(memoizedB); // 3.1415

// Versión C - Con argumentos
let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoizeC =
  (func) =>
  (...args) =>
    this[`${func}(${args})`]
      ? this[`${func}(${args})`]
      : (this[`${func}(${args})`] = func(...args));

const memoizedGreet: Function = memoizeC(repeatText);
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2
