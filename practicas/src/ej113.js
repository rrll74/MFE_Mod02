var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); // Jiménez <-- Se hace la llamada en el contexto de person.wife y su propiedad surname es esa
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); // Pérez <-- la variable surnameFunction es declarada en el ámbito global y ese es su contexto y la variable existente tiene el valor Pérez
console.log(surnameFunction.call(person)); // González <-- porque es invocada en el contexto de person que también tiene una propiedad con surname y es esa
