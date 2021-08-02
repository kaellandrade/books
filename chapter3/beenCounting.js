function countBs(text) {
    return countChar(text, 'B');
}

const countChar = (text, char) => (text.split('').filter((x) => x === char).length)

const STRING = 'OLOBOAMAOBOLO'

console.log(countBs(STRING));
console.log(countChar(STRING, 'O'));

