
/**
 * Recebe um valor, uma função e três funções callBacks
 * a primeira reslaixa um teste, a segunda atuliza um determinado valor
 * e a última será executada;
 */
function loop(value, callConditional, callUpdate, callExc) {
    for (let i = value; callConditional(i); i = callUpdate(i))
        callExc(i);
}

const printsSqrt = x => console.log(`√${x} = ${Math.sqrt(x).toFixed(2)}`);

loop(0, n => n <= 100, n => ++n, printsSqrt);