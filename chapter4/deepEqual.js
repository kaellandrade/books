
/**
 * Dado dois objetos deepEqual verifica se ambos possuem
 * os mesmo atributos e valores.
 */
function deepEqual(n1, n2) {
    if (n1 === n2) return true;
    if (n1 == null || typeof n1 != 'object'
        || n2 == null || typeof n2 != 'object') return false;

    let keysN1 = Object.keys(n1);
    let keysN2 = Object.keys(n2);

    if (keysN1.length != keysN2.length) return false;
    for (const KEY of keysN1) {
        if (!keysN2.includes(KEY) || !deepEqual(n1[KEY], n2[KEY])) return false;
    }
    return true;
}