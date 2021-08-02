/**
 * Every usando laço.
 * Dado um array e uma função callBack de teste
 * every1 retorna true se todos os elementos do array
 * satisfaz a callback.
 */
function every1(array, test) {
    for (const item of array)
        if (test(item))
            continue
        else
            return false;
    return true;
}
console.log(every1([1, 2, 3, 4, 5], n => n < 10));

/**
 * Every usando laço
 */
function every2(array, test) {
    return !array.some(x => !test(x))
}
console.log(every2([1, 2, 3, 4, 5], n => n < 10));
