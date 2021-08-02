/**
 * Recebe uma lista de arrays e junta todos eles em um único array
 */
function flatteing(arr) {

    return arr.reduce((prev, next) => (
        prev.concat(next)
    ), []);

}

let arrays = [1,2,3,4, [5,6,7,8,9]];

console.log(flatteing(arrays));