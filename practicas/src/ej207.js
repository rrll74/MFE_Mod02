class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    /*
    setTimeout se ejecuta en un contexto diferente a this, por lo que no va a
    reconocer las variables de la clase. Para solucinarlo se le pasan los
    argumentos de la función como argumentos adicionales después de indicar el
    argumento del tiempo en el método setTimeOut. De la siguiente forma:
    setTimeout(
      funcion callback(arg1, arg2, ...){ ... },
      tiempo,
      valor de arg1, valor de arg2, ...)

    */

    setTimeout(
      function (text) {
        console.log(`Your reminder after ${delay} seconds is: ${text}`);
      },
      delay * 1000,
      this.text
    );
  }
}

const alarm = new Reminder("Es hora de levantarse");
alarm.remindMe(3);

const alarm2 = new Reminder("Es hora de dormir");
alarm2.remindMe(6);
