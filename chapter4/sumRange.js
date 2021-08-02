/**
 * Retorna um array dentro de um intervalo determinado
 * ex: range(1,5) ->    [1,2,3,4,5]
 * ex: range(1,5,-1) -> [5,4,3,2,1]
 */
const range = (start, end, step = start < end ? 1 : -1) => {
    const list = []
    if (step > 0)
        for (let i = start; i <= end; i += step) list.push(i);
    else {
        for (let i = start; i >= end; i += step) list.push(i);
    }
    return list;
}

/**
 * Retorna a soma de uma array
 * ex: [1,2,3] -> 6
 */
const sum = (arr) => {
    return (arr.length == 0 || arr == undefined) ? 0 : arr.pop() + sum(arr);
}

/**
 * Recebe um array como argumento e inverte o array original (há efeitos colaterais );
 * a primeira posição pela última.
 * note que a última posição é representada por arr[arr.length - 1 - i]
 */
const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
        
    }
    return arr;
}
/**
 * Recebe um array e retorna um novo array invertido (não há efeitos colaterais)
 * retira o elemento do final concatena com o inicio
 */
let array = [1, 2, 3, 4, 5];
const reverseArray = ([...arr]) => { // cria uma cópia do array passado como parâmetro
    if (arr.length == 0) return [];
    else return [arr.pop()].concat(reverseArray(arr));
}