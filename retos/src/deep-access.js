const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

const deepGet = (obj, ...levels) => {
  let objAux = obj;
  levels.forEach((level) => {
    objAux = objAux.hasOwnProperty(level) ? objAux[level] : undefined;
  });
  return objAux;
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}
console.log("---------------------");

const myObject2 = {};

const deepSet = (data, obj, ...levels) => {
  let objAux = obj,
    nroLevels = levels.length,
    nroLevel = 1;
  levels.forEach((level) => {
    if (nroLevel === nroLevels) objAux[level] = data;
    else if (objAux.hasOwnProperty(level)) objAux = objAux[level];
    else {
      objAux[level] = {};
      objAux = objAux[level];
    }
    nroLevel++;
  });
  return obj;
};

deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}
