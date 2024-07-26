/**
1. What are the differences between a class and an interface?
R - Há várias difereças entre elas, por exemplo. Uma interface não pode ser instanciada
com o perador new, uma clase não possue uma feature de merge quando são declaradas como o
mesmo nome em um dado escopo, ou seja, elas devem possuir nomes únicos. Além disso uma classe pode implementar
uma ou mais interfaces. Interfaces são como um 'contrato' que precisa ser cumprido qundo são implementados em classes.

Uma classe defini um tipo e um valor. Já uma interface define apenas um tipo. Interface não
permite modificadores de acesso, diferentemente de classes.

2. When you mark a class’s constructor as private, that means you can’t instantiate
or extend the class. What happens when you mark it as protected instead? Play
around with this in your code editor, and see if you can figure it out.

R- Não é possível instanciar, porém, é possível herdar, classes que herdam também não podem instanciar.

 3. Extend the implementation we developed “Factory Pattern” on page 108 to make
it safer, at the expense of breaking the abstraction a bit. Update the implementa‐
tion so that a consumer knows at compile time that calling Shoe.cre
ate('boot') returns a Boot and calling Shoe.create('balletFlat') returns a
BalletFlat (rather than both returning a Shoe). Hint: think back to “Overloaded
Function Types” on page 58
 */


// Simulando uma classe Final
class Teste {
	private constructor() {
	}
}

// tslint:disable-next-line:max-classes-per-file
class B extends Teste {
}

const a = new B();


type Shoe = {
	purpose: string
};

class BalletFlat implements Shoe {
	purpose = 'dancing';
}

class Boot implements Shoe {
	purpose = 'woodcutting';
}

class Sneaker implements Shoe {
	purpose = 'walking';
}

type ShoeCreator = {
	(typeShoe: 'balletFlat'): Shoe
	(typeShoe: 'boot'): Boot
	(typeShoe: 'sneaker'): Sneaker
};

let create: ShoeCreator = (typeShoe: 'balletFlat' | 'boot' | 'sneaker'): Shoe => {
	switch (typeShoe) {
		case 'balletFlat':
			return new BalletFlat;
		case 'boot':
			return new Boot;
		case 'sneaker':
			return new Sneaker;
	}
};

// Jeito antigo (sem overloaded function types)
// let Shoe = {
// 	create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
// 		switch (type) {
// 			case 'balletFlat':
// 				return new BalletFlat;
// 			case 'boot':
// 				return new Boot;
// 			case 'sneaker':
// 				return new Sneaker;
// 		}
// 	},
// };


const calcado = create('sneaker');
const calcado1 = create('boot');
const calcado2 = create('balletFlat');
//
console.log(calcado.purpose, calcado1.purpose, calcado2.purpose);