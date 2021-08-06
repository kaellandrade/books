// Testando correspondência
let rg1 = /abc/;
let rg2 = new RegExp('abc');
/*
console.log(rg2.test('abcde'));
console.log(rg1.test('abxde'));
console.log(rg1.test('micael andrade abc santos'));
*/

// Conjunt de caracteres
let rg3 = /[0123456789]/;
let rg4 = /[0-9]/;
let rg5 = /\s\w/;
let rg6 = /\D/;
let rg7 = /\W/;
let rg8 = /\S/;
let rg9 = /./;




/* // ? EXEMPLO
console.log(rg3.test("nasci em 1996"));
console.log(rg4.test("nasci em 1996"));
console.log(rg5.test(" micael "));
console.log(rg6.test("3324234242"));
console.log(rg7.test("332423com*4242j"));
console.log(rg8.test("          "));
console.log(rg9.test("-"));
*/



/* //? Tabela Regex
\d 	Qual quer digito
\w	Qualquer caractere alfanumérico
\s	Qualquer caractere de espaço (space, tab, newline, and similar)
\D	Um caractere que não é um dígito
\W	Umcaractere não alfanumérico
\S	Um caractere não-branco
.	Qualquer caractere exceto nova linha
O caracter (?) significa que um digito pode ocorrer ou não;
\b boundery(fronteira)
*/

/*
// ? EXEMPLO
let dateTime = new RegExp(/^\d\d-\d\d-\d\d\d\d \d\d:\d\d/);
console.log(dateTime.test("01-07-2020 15:20"));
console.log(dateTime.test("01-julho-2020 15:20"));

// Qualquer caracteres que não estejam no conjunto
let notBinary = /[^0-1]/; //Contém valores que não estejam entre 0 e 1
console.log(notBinary.test("11001000101010101010011000110"));
console.log(notBinary.test("11001000103004110"));


// ?Repetindo mais de uma casa com operador (+)
console.log(/'\d+'/.test("'123'")); // deve conter pelo menos um dígito entre as ''
console.log(/'\d+'/.test("''")); 
console.log(/'\d*'/.test("'123'")); // pode conter zero ou mais dígitos entre as ''
console.log(/'\d*'/.test("''"));



// Usando (?)
let leite = RegExp(/leite?/); // A letra ('e') é opcional
// console.log(leite.test('leit'))

// Usando rangens para simplificar a expressão
let dateTime = new RegExp(/\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/);
console.log(dateTime.test('08-04-1996 1:23'));

// Agrupando Subexpressões
// (hoo) está agrupado e pode aparecer mais de uma vez 
let cartoonCrying = /boo+(hoo+)+/i;   // o (i) torna a expressão insensível a maiúsculas e minúsculas
console.log(cartoonCrying.test("Boohoooohoohoooho"));

let time = RegExp(/\d{1,2}:\d{1,2}/);
let string = 'micael andrade chegou às 10:40';
conole.log(string.match(time)); // também podemos usar o método match em strings;
console.log(time.exec('fnasçkldjfçaslfdkj12:23fajsçdflkjasçdlfk13:23j'));

let quotedText = /'([^\d]+)'/;
console.log(quotedText.exec("micael uma vez disse: 'não disse nada'"))
*/

// console.log(/bad(ly)?/.exec("bad"));

/**
 * Quando um grupo acaba não sendo correspondido (por exemplo, quando seguido por um ponto de interrogação), 
 * sua posição na matriz de saída permanecerá indefinida. 
 * Da mesma forma, quando um grupo é correspondido várias vezes, apenas a última correspondência termina na matriz.
 console.log(/(\d)+/.exec("123456789")); // grupo correspondido várias vezes
 */

//  Classe data
// console.log(new Date());
// Criando objeto para um tempo específico (MESES CONTAM A PARTIR DO 0) LOGO, DEZEMBRO É 11
// console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// console.log(new Date().getTime());
// console.log(new Date(1625965674087)); // Se você fornecer ao construtor Date um único argumento, esse argumento será tratado como uma contagem de milissegundos.
/*
function getDate(string) {
    try{
        let [_, month, day, year] = /\b(\d{1,2})-(\d{1,2})-(\d{4})\b/.exec(string);
        return new Date(year, month - 1, day);
    }catch(e){
        console.log('Sem data');
    }
    return new Date()
}

console.log(getDate('04-08-1994'));
console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate")); // Exatamente a palavra cat apenas


let animalCount = /\b\d+ (porco|vaca|frango)s?\b/;
console.log(animalCount.exec("tenho 15 vaca"));
console.log(animalCount.test("15 porcos"));
Usando o método replace podemos usar uma expressão regular
quando passamos o argumento g(opcional) todas a os corrência
serão subistituídas

console.log("Borobudur".replace(/[ou]/, 'a'));
console.log("Borobudur".replace(/[ou]/g, 'a'));

Replace com grupos
const NAMES = `
Andrade Micael
Andrade Silvania
Suedy Daniel
Andrade Jorge
Andrade Joice
`;
console.log(NAMES.replace(/(\w+) (\w+)/g, "$2, $1 ($&)"));

Podemos passar uma função para o método replace também
para cada correspodência essa função será chamada e 
seu retorno será usado para construir a nova string

const booksRg = RegExp(/\b(Computador|Computador pessoal)\b/ig);
const string = `
Eu tenho um computador pessoal, quem criou o computador ?
computador é muito bom
`;
const toUpper = string => string.toUpperCase();

console.log(string.replace(booksRg, toUpper));

Vejamos uma função interessante para 
para diminuir a quantidade de igredientes
em uma receita.


let stock = `
1 limão
2 calabresas
4 bananas
10 laranjas
2 aboboras
7 maçãs
`
const stockRg = RegExp(/\b(\d+) (\w+)\b/g);
const plusOne = (_, quantidade, unidade) => {
    quantidade = Number(quantidade) - 1;
    if (quantidade == 1) {
        unidade = unidade.slice(0, unidade.length - 1); // Retira o s
    }
    else if (quantidade == 0) {
        quantidade = "nenhum";
    }
    return `${quantidade} ${unidade}`;
}
console.log(stock.replace(stockRg, menosUm));

Removendo comentários 


function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

// usando regex de forma dinâmica
let user = "dea+hl[]rd";
let text = "Meu nome é dea+hl[]rd andrade, sou dea+hl[]rd, olá micael";
let escaped = user.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

// Poedmos usar o search para trabalhar com regex como fazíamos com IndexOf
console.log("  word".search(/\S/));
// Usando o lastIndex
let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);
console.log(pattern.lastIndex);

let global = /abc/g;
console.log(global.exec("xyz abc"));
let sticky = /abc/y; // Deve começar no indexOf
console.log(sticky.exec("abc 1231"));

// Resíduos de chamadas
let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("and now: 1")); // note que não encontramos aqui pois o lastIndex está
// Loops de matches

*/
let input = "Uma string com 3 numeros in eu tenho 4 anos e fiz 65 dias...";
let number = new RegExp(/\b\d+\b/g);
let match;
// Isso faz uso do fato de que o valor de uma expressão de atribuição (=) é o valor atribuído.
while (match = number.exec(input))
    console.log(`Encontado ${match[0]} na posição ${match.index}`);
