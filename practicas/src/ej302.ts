const julia = { name: "Julia", surname: "Álvarez", age: 19 };

type SetFunction = (field: string, obj: object, value: any) => object;
const set: SetFunction = (field, obj, value) => {
  const newObj = { ...obj };
  newObj[field] = value;
  return newObj;
};

const updatedJulia = set("age", julia, 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

type SetFunctionProperty = (obj: object, value: any) => object;
const setName: SetFunctionProperty = (obj, value) => set("name", obj, value);
const setSurname: SetFunctionProperty = (obj, value) =>
  set("surname", obj, value);
const setAge: SetFunctionProperty = (obj, value) => set("age", obj, value);

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }

// IGUAL, PERO CURRIFICADO
type SetFunctionCurrified = (
  field: string
) => (object: Object) => (value: any) => Object;
const setCurrified: SetFunctionCurrified = (field) => (object) => (value) =>
  set(field, object, value);

const setCurrifiedName = setCurrified("name");
const setCurrifiedSurname = setCurrified("surname");
const setCurrifiedAge = setCurrified("age");

console.log(setCurrifiedName(julia)("Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setCurrifiedSurname(julia)("González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setCurrifiedAge(julia)(25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
