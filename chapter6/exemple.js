/**
 * Usando o this para referenciar atributos do próprimo objeto
 */
function speak(line) {
    console.log(`The ${this.type} rabit says '${line}'`);
}

let whiteRabbit = { type: 'white', speak };
let hungryRabbit = { type: 'Hungry', speak };


// whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// hungryRabbit.speak("I could use a carrot right now.");
// passando o objeto explicitamente com a função call
// speak.call(whiteRabbit, 'Burp!');

/**ANOTAÇÕES:
 * Prototypes
 * ==========
 * Além do conjunto de propriedades, a maioria dos objetos também
 * possuem um protótipo.
 * Um protótipo é outro objeto usado como uma fonte de fallback(plano B) de propriedades.
 * Quando um objeto recebe uma solicitação de uma propriedade que ela não possui, 
 * seu protótipo será pesquisado para a propriedade, então o protótipo do protótipo e assim por diante.
 * 
 * As relações protótipos de objetos JavaScript formam uma estrutura em forma 
 * de árvore e, na raiz dessa estrutura, assenta o Object.prototype.
 * 
 * funções derivam de Function.prototype
 * e arrays de Array.prototype
 */

/**
 * Criando meu protótipo
 */
let protoRabit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    },
    sleep() {
        console.log(`The ${this.type} rabbit sleeping!`)
    }
}

/**
 * Função construtora
 function makeRabbit(type){
     let rabbit = Object.create(protoRabit);
    rabbit.type = type;
    return rabbit;
}

// Compartilha propiedades de protoRabit
let killerRabit = Object.create(protoRabit);

killerRabit.type = "killer";
killerRabit.speak("SKREEEE!")
killerRabit.sleep();

makeRabbit("Good").speak('hello');
makeRabbit("Good").sleep();
*/
/**
 * Funções construtoras começam com letras maiúsculas
 * para diferenciar de outras funções. Funções construtoras
 * são funções que possuem uma propriedade prototype
 function Rabbit(ty) {
     this.type = ty;
    }
    Rabbit.prototype.speak = function (line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
    Rabbit.prototype.sleep = function () {
        console.log(`The ${this.type} rabbit sleeping!`);
    }

    let weirRabbit = new Rabbit("Weird");

    weirRabbit.speak('prototype!');
    weirRabbit.sleep();

    console.log(Object.getPrototypeOf(Rabbit) ==
    Function.prototype); // É uma função construtora

    console.log(Object.getPrototypeOf(weirRabbit) ==
    Rabbit.prototype);
    */

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

class KillerRabbit extends Rabbit {
    constructor(type) {
        super(type);
    }

    speak(line) {
        console.log(`The ${this.type} rabbit SAYS '${line}'`)
    }
}

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
};

let killerRabbit = new KillerRabbit('killer');
let blackRabbit = new Rabbit('Black');

// blackRabbit.speak('BR');
// killerRabbit.speak('KR');
Rabbit.prototype.teeth = "small";
killerRabbit.teeth = "long, sharp, and bloody";

// console.log(String(blackRabbit));


/**
 * Maps / Dicionário
 * Não é recomendado usar um objeto simples para 
 * criar dicionário dessa forma.
 */

let ages = { // ERRADO pois dessa forma ages possui atributos definidos em seu protótipo que pode causar erros.
    Boris: 39,
    Liang: 22,
    Júlia: 62
};

//Para essa finalidade o JS possui uma classe Map;
// Map é um tabela hash
// let ages2 = new Map();
// ages2.set("Boris", 39);
// ages2.set("Liang", 22);
// ages2.set("Júlia", 62);

// console.log(`Júlia is ${ages2.get("Júlia")}`);
// → Júlia is 62
// console.log("Is Jack's age known?", ages2.has("Jack"));
// → Is Jack's age known? false
// console.log(ages2.has("toString"));
// → false

// Ignora as propriedades definidas no protótipo Obj.hasOwnProperty('toString')

// Iterator
let okIterator = "Micael Andrade"[Symbol.iterator]();

const recursionIterator = (obj) => {
}

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y)
            }
        }

    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return { done: true };

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return { value, done: false };
    }
}
Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);

for (let { x, y, value } of matrix) {
    console.log(x, y, value);
}

class Teperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        })
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let matrix2 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix2.get(3, 2));

console.log(matrix2 instanceof Array );

/*
let temp = new Teperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);
*/
