// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(phrase) {
  let cad = "";
  for (let index = 0; index < phrase.length; index++) {
    const element = phrase[index];
    cad += element === " " ? " " : plain[cipher.indexOf(element)];
  }
  return cad;
}

console.log(decrypt(secret));
