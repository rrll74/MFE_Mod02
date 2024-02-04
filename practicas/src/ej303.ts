class Morse {
  public phrase: string;
  private tempRef: number = 50;
  private silence: string = " ";
  private timing = {
    ".": 1,
    "-": 3,
    basicSep: 1,
    letterSep: 3,
    wordSep: 7,
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
    this.showSignal(false);
  }

  private showSignal(connected: boolean) {
    console.log(connected ? "ON" : "OFF");
  }

  private waitTime = (callback: Function) => {
    const tToWait = this.tempRef;
    setTimeout(() => callback(tToWait), tToWait);
  };

  private sendSignal = (signal: string) => {
    this.showSignal(signal !== this.silence);
    return new Promise((resolve, _reject) => {
      this.waitTime(resolve);
    });
  };

  private traduce = () => {
    let traduction: string = "";
    for (const i of this.phrase) {
      if (i === this.silence) {
        traduction += this.silence.repeat(this.timing.wordSep);
      } else {
        const tradLetter: string = this.morseAlphabet[i.toLowerCase()];
        console.log(i.toLowerCase(), tradLetter);
        for (const j of tradLetter) {
          const timeToWait = this.timing[j];
          traduction +=
            ".".repeat(timeToWait) + this.silence.repeat(this.timing.basicSep);
        }
        traduction += this.silence.repeat(this.timing.letterSep);
      }
    }
    return traduction;
  };

  send = async () => {
    const textTraduced: string = this.traduce();
    console.log(textTraduced);
    for (const i of textTraduced) {
      await this.sendSignal(i);
    }
  };
}

const texto = new Morse("Lemoncode morse text!");
texto.send();
