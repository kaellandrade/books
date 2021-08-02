import SCRIPT from './scripts.js'
/*
const myMap = (arr, callBack) => {
    const newArr = [];
    for (let item of arr)
        newArr.push(callBack(item));
    return newArr;
}

const myReduce = (arr, callBack, start) => {
    let current = start;
    for (let item of arr) {
        current = callBack(current, item);
    }
    return current;
}


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

SCRIPT.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
})

const media = (array) => {
    return array.reduce((prev, att) => prev + att) / array.length;
}

const anoMedioMortos = Math.round(media(SCRIPT.filter(item => !item.living).map(item => item.year)))
const anoMedioVivos = Math.round(media(SCRIPT.filter(item => item.living).map(item => item.year)))

console.log(anoMedioMortos, anoMedioVivos)


let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
*/

/**
 * Dado um código de uma caracter retorna um objeto script do idioma origem
 * a qual esse código pertence;
 */
function characterScript(code) {
    for (let script of SCRIPT) {
        // Verifica a faixa do code
        if (script.ranges.some(([from, to]) => { return code >= from && code < to; })) {
            return script;
        }
    }
    return null;
}

/**
 * Cria um conjunto de itens por nomes não repetidos
 */
const countBy = (items, grupName) => {
    let grups = [];
    for (let item of items) {
        let name = grupName(item);
        let known = grups.findIndex(c => c.name === name);
        if (known == -1) grups.push({ name, count: 1 })
        else grups[known].count++
    }
    return grups;
}

/**
 * Recebe um texto e retorna quantos porcento 
 * de um determinado idioma está contindo no texto;
 */
function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({ name }) => name != 'none')


    let total = scripts.reduce((n, { count }) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(', ');
}

export {countBy, characterScript};