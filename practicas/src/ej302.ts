const julia = { name: "Julia", surname: "Álvarez", age: 19 };

type SetFunction = (obj: object, field: string, value: any) => object;
const set: SetFunction = (obj, field, value) => {
  const newObj = { ...obj };
  newObj[field] = value;
  return newObj;
};

const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

type SetFunctionProperty = (obj: object, value: any) => object;
const setName: SetFunctionProperty = (obj, value) => set(obj, "name", value);
const setSurname: SetFunctionProperty = (obj, value) =>
  set(obj, "surname", value);
const setAge: SetFunctionProperty = (obj, value) => set(obj, "age", value);

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
