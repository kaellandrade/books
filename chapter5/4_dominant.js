import {characterScript, countBy} from './examples/example.js';
/**
 * Recebe uma texto e determina qual a direção de escrita desse 
 * idioma. 
 */
function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != 'none')

    if (scripts.length === 0)
        return 'Nenhum scripts encontrado!';

    let script = scripts.reduce((prev_acc, next) => {
        return (next.count > prev_acc.count) ? next : prev_acc;
    })

    return `Dominant writing direction: ${script.name}\nChar's Find: ${script.count}`
}


console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));