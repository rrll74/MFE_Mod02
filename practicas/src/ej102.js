const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

function printAverage(classResults) {
  let suma = 0,
    alumnos = 0;
  for (const element in classResults) {
    suma += classResults[element];
    alumnos++;
  }
  let prom = suma / alumnos;
  let calificacion;
  if (prom >= 10) calificacion = "Matrícula de honor";
  else if (prom >= 9) calificacion = "Sobresaliente";
  else if (prom >= 7) calificacion = "Notable";
  else if (prom >= 6) calificacion = "Bien";
  else if (prom >= 5) calificacion = "Suficiente";
  else if (prom >= 4) calificacion = "Insuficiente";
  else calificacion = "Muy deficiente";

  console.log(`La calificación media de la clase es: ${prom} ${(calificacion)}`);
}

printAverage(eso2o);
