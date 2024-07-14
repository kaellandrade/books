/*

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

R- Não é possível instanciar, porém, é positive herdar porém as classes que herdam também não podem instanciar.

*/



class Teste {
	private constructor() {
	}
}

// tslint:disable-next-line:max-classes-per-file
class B extends Teste {
}
const a = new B();