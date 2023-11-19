// APARTADO A

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
  var equal = true;
  // Se compara en ambos objetos por si uno tiene propiedades que no tiene el otro
  for (const key in a) {
    equal &&= b.hasOwnProperty(key) && a[key] === b[key];
    if (!equal) break;
  }
  for (const key in b) {
    equal &&= a.hasOwnProperty(key) && a[key] === b[key];
    if (!equal) break;
  }
  return equal;
}

console.log(isEqual(user, clonedUser)); // true

// APARTADO B

var user = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
  var equal = true;

  for (const key in a) {
    equal &&= b.hasOwnProperty(key);

    // Se usa recursividad para simplificar la función
    // Igual que en isEqual se comparan en ambos objetos por si uno no tiene propiedades del otro
    if (equal && typeof a[key] === "object") {
      equal &&= isDeepEqual(a[key], b[key]);
    } else if (equal && typeof a[key] === "array") {
      equal &&= isDeepEqual({ ...a[key] }, { ...b[key] });
    } else {
      equal &&= a[key] === b[key];
    }
    if (!equal) break;
  }
  for (const key in b) {
    equal &&= a.hasOwnProperty(key);
    if (equal && typeof b[key] === "object") {
      equal &&= isDeepEqual(b[key], a[key]);
    } else if (equal && typeof b[key] === "array") {
      equal &&= isDeepEqual({ ...b[key] }, { ...a[key] });
    } else {
      equal &&= a[key] === b[key];
    }
    if (!equal) break;
  }
  return equal;
}

console.log(isDeepEqual(user, clonedUser)); // true
