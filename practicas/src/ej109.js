// Según las especificaciones dadas sólo se comprueba hasta el valor de la raíz cuadrada del número buscado como posible primo
function _isPrime(nro) {
  if (nro === 1) return false;
  else if (nro >= 2 && nro <= 3) return true;
  else {
    let squareRoot = Math.sqrt(nro);
    for (let i = 2; i <= squareRoot; i++) if (nro % i === 0) return false;
  }
  return true;
}

function showPrimes(from, to) {
  for (let i = from; i <= to; i++)
    console.log(i + " is " + (_isPrime(i) ? "PRIME!" : "not a prime"));
}

showPrimes(1, 100);
