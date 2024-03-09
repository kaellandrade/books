//  1 For each of these values, what type will TypeScript infer?
// a)
let a = 1042; // number
// b)
let b = 'apples and oranges'; // string
// c)
const c = 'pineapples'; // tipo especifico 'pineapples'
// d)
let d = [true, true, false]; // boolean[]
// e)
let e = { type: 'ficus' }; // type { type:string }
// f)
let f = [1, false]; // (boolean | number) []
// g)
const g = [3]; // number[]
// h)
let h = null; // any (widening)

// 2. For each of these values, what type will TypeScript infer?;
// a) Porque não permitimos o widening aqui, ou seja esse valor só pode ser 3
let i: 3 = 3;
i = 3; // Error TS2322: Type '4' is not assignable to type '3'.

// b) O compilador inferiu que j é uma lista de números inteiros, portanto não podemos adicionar '5'
let j = [1, 2, 3];
j.push(4);
j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.

// c) never é um bottom type. Isso significa que ele pode ser atribuído para qualquer tipo, nenhum tipo pode ser atribuído para ele.
let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.

// d) Valores unknown não permite operadores aritméticos, pois não se sabe ainda qual é o seu valor, precisamos refiná-lo para tal.
// poderíamos utilizar o typeof para tal refinamento

let l: unknown = 4;
let m = l * 2; // Error TS2571: Object is of type 'unknown'.
