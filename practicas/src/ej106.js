// CLOSURE
function createDices() {
  let dice1 = null,
    dice2 = null;

  return {
    reset: function () {
      dice1 = dice2 = null;
      console.log("Valores reseteados");
    },
    tirar: function () {
      dice1 = Math.round(Math.random() * 5 + 1);
      dice2 = Math.round(Math.random() * 5 + 1);
    },
    print: function () {
      if (dice1 && dice2) {
        console.log(dice1, dice2);
        if (dice1 === 6 && dice2 === 6) {
          console.log("El doble 6 tiene premio!!!");
        }
      }
    },
  };
}

// Se crean 2 variables diferentes que comparten las funciones, aunque no las variables internas
const dados1 = createDices();
dados1.tirar();
dados1.print();

const dados2 = createDices();
dados2.tirar();
dados2.print();
