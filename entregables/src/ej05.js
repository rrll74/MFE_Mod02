/*

### 5. Slot Machine

El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un **contador de monedas** que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al **método play** el número de monedas se debe incrementar de forma automática y debe generar **tres booleanos aleatorios** que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean `true`, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".


#### Ejemplo de uso

*/

class SlothMachine {
  constructor() {
    this.monedas = 0;
  }

  reset() {
    this.monedas = 0;
  }

  tirada() {
    let gana = true;
    for (let i = 0; i < 3 && gana === true; i++)
      gana &&= Math.round(Math.random()) === 1 ? true : false;
    return gana;
  }

  play() {
    this.monedas++;
    if (this.tirada()) {
      console.log(`Congratulations!!!. You won ${this.monedas} coins!!`);
      this.reset();
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
