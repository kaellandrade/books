/**
 * Recebe uma lista e retorna uma lista encadeadas com a representação
 * de objeto.
 */
const arrayToList = ([...arr]) => {
    if (arr.length == 0) return null;
    else return { value: arr.shift(), rest: arrayToList(arr) }
}
/** VERSÃO 1.0
 * Recebe um objeto que representa uma lista encadeada e retorna 
 * uma lista 
 const listToArray = (linkedlist, list = []) => {
     if (linkedlist == null)
     return list;
     else {
         list.push(linkedlist.value);
         listToArray(linkedlist.rest, list)
        }
        return list;
    }
*/

/** VERSÃO 2.0
 * Recebe um objeto que representa uma lista encadeada e retorna 
 * uma lista 
*/
const listToArray = (linkedlist) => {
    if (linkedlist == null)
        return [];
    else
        return [linkedlist.value, ...listToArray(linkedlist.rest)];

}

const nth = (linkedlist, n) => {
    if (!linkedlist)
        return undefined
    else if (n === 0)
        return linkedlist.value;
    else
        return nth(linkedlist.rest, n - 1);
}

const nth2 = (linkedlist, n) => listToArray(linkedlist)[n];

const prepend = (ele, list) => {
    return { value: ele, rest: list }
}