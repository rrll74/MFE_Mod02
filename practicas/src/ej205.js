// Esta sería la función recursiva
// const fib = (n) => {
//   return n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);
// };

const fib = (n) => {
    if(n === 0) return 0
    else if (n===1) return 1
    else {
        let fActual = 1, fSig = 1;
        for (let i = 2; i < n; i++) {
            [fActual, fSig] = [fSig, fActual + fSig];
            // console.log(`fib(${i}) -> ${fActual}`);
        }
        return fSig;
    }
};

console.log(fib(10));
