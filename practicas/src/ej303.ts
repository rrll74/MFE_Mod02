class Morse {
  public phrase: string;
  private traduction: string = "";
  private tempRef: number = 50;
  private timing = {
    ".": 1,
    "-": 3,
    sepBasica: 1,
    sepLetra: 3,
    sepPalabra: 7,
  };
  private morseAlphabet = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
  };

  constructor(phrase: string) {
    this.phrase = phrase;
    this.mostrarSenial(false);
  }

  private mostrarSenial(encendido: boolean) {
    console.log(encendido ? "ON" : "OFF");
  }

  private esperarTiempo = (time: number, callback: Function) => {
    const tToWait = time * this.tempRef;
    setTimeout(() => callback(tToWait), tToWait);
  };

  private enviarSenial = (time: number, encendido: boolean) => {
    if (encendido) this.mostrarSenial(encendido);
    return new Promise((resolve, _reject) => {
      this.esperarTiempo(time, resolve);
      if (encendido) this.mostrarSenial(false);
    });
  };

  private enviarLetra = (letra: string) => {
    // console.log(letra);
    return new Promise(async (resolve, reject) => {
      const traduction: string = this.morseAlphabet[letra];
      //console.log(traduction);
      for (const i of traduction) {
        //console.log(letra, i);
        await this.enviarSenial(this.timing[i], true);
        //console.log("separación de señal");
        await this.enviarSenial(this.timing.sepBasica, false);
      }
      //console.log("separación de letras");
      await this.enviarSenial(this.timing.sepLetra, false);
    });
  };

  traduce = async () => {
    for (const i of this.phrase) {
      if (i === " ") {
        //console.log("separación de palabras");
        await this.enviarSenial(this.timing.sepPalabra, false);
      } else {
        this.enviarLetra(i.toLowerCase());
      }
    }
  };
}

const texto = new Morse("Esta frase.");
texto.traduce().then();
