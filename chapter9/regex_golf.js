/**
 * car and cat ✅
 * pop and prop ✅
 * ferret, ferry, and ferrari✅
 * Any word ending in ious ✅
 * A whitespace character followed by a period, comma, colon, or semicolon ✅
 * A word longer than six letters✅
 * A word without the letter e (or E)
 */

/**
 * Recebe uma expressão regular e uma lista de string
 * para verificar se todas strings passam no padrão.
 */
const testaRegex = (regexp, string) => {
    if (regexp.source === '...')
        return;
    for (let str of string) {
        if (!regexp.test(str))
            console.log(`${str} -> ❌ `);
        else
            console.log(`${str} -> ✅`)
    }
}
// testaRegex(/ca[rt]/i, ['micael andrade', "I'm in my car", "I'm in my with my cat"]);
// testaRegex(/pr?op/i, ['pop', "prop", "the prop", 'po']);
// testaRegex(/ferr(et|y|ari)/i, ['Eu vou SAIR COM MINHA FERRARI', "I'm going out with my ferry", 'my ferre']);
// testaRegex(/ious\b/i, ['estouious', "envious", 'studious', 'joyous']);
// testaRegex(/\w{7}/i, ['Micael', "Silvania", 'Daniel', 'Herminio']);
// testaRegex(/\b[^\We]+\b/i, ["red platypus", "wobbling nest", 'Micael', "Silvania", 'Daniel', 'Herminio', 'marcos', 'TETE bob']);



