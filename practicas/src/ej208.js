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
