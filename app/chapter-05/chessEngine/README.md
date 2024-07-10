TODO: Implementar o restante do modelo do Chess.

# Classes e Interfaces

## Classes

### Retornando `this`

o `this` pode ser considerado um tipo de retorno. Isso é bastante útil para classes que herdam de outras classes. Por
exemplo, quando retornamos o `this` de um método mãe que será implementado em uma classe filha também, o `this` irá
pegar a instância da classe (mãe ou filha).

Esse recurso é utilizado para criar `chained API`(apis que são chamadas sucessivamentes:
Exemplo `set.add(2).add(3).add(4)...`)

## Interfaces

> Aliases de tipo e interfaces são principalmente duas sintaxes para a mesma coisa, mas há algumas pequenas diferenças.

> As interfaces não precisam estender outras interfaces. Na verdade, uma interface pode estender qualquer forma: **um
tipo de objeto, uma classe ou outra interface**.

### Interface vs Types qual a diferença ?

- type alias são mais gerais (seu lado direito pode ser qualquer outro tipo incluindo operadores | ou &) para interfaces
  o lado direito deve ser um shape.
  por exemplo não daria para fazer isso com interfaces.

```typescript
type A = number
type B = A | string
```

- Quando extendemos uma interface o typescript garante que a interface que você está estendendo seja atribuível a
  extenção.

```typescript
interface A {
	good(x: number): string

	bad(x: number): string
}

interface B extends A {
	good(x: string | number): string

	bad(x: string): string // Error TS2430: Interface 'B' incorrectly extends
} // interface 'A'. Type 'number' is not assignable
// to type 'string'.


// it'is ok now!
type A = {
	good(x: number): string
	bad(x: number): string
}


type B = A & {
	good(x: string | number): string
	bad(x: string): string
}



```

- Interfaces com mesmo nome no scopo serão mescladas!

```typescript
// declaration merging.
interface A {
	a: string
	// Modificadores de acesso não são permitidos em interfaces, mas readonly pode.
}

interface A {
	b: string
}

interface A {
	c: string
}

class Test implements A {
	a: string;
	b: string;
	c: string;
}
```

## Classes são estruturalmente tipadas

> Como qualquer outro tipo em TypeScript, TypeScript compara classes por sua estrutura, não por seu nome

Diferente de linguagens como C#, Java, Sacala e outras onde as classes são tipada nominalmente.

Em código isso significa o seguinte:

```typescript
class Zebra {
	trot() {
		// ...
	}
}

class Poodle {
	trot() {
		// ...
	}
}

function ambleAround(animal: Zebra) {
	animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle
ambleAround(zebra) // OK
ambleAround(poodle) // OK
```

A função `ambleAround` permite tanto objetos instanciados a partir de `Zebra` ou `Poodle`, ou seja, eles são
intercambiáveis. Caso estivéssemo utilizando uma
linguagem de classes nominalmente tipadas isso seria um erro, mas como Typescript é estruturalmente tipada isso é
possível!

Porém o Typescript não iria permitir se tivéssemos algo desse tipo:

```typescript

class A {
	private nome: string;
}

class B extends A {

}

const fn = (a: A) => {
}

fn(new A()) // ok
fn(new B()) // ok

/*
Porém isso não é permitido...
Error TS2345: Argument of type '{x: number}' is not
assignable to parameter of type 'A'. Property 'x' is
private in type 'A' but not in type '{x: number}'.
*/
fn({ nome: 'micael' }) // ERROR
```

Tipo e valores possuem namespaces separados no Typescript.
A maioria das coisas que você pode expressar no TypeScript são valores ou tipos:

```typescript
// values
let a = 1999

function b() {
}

// types
type a = number

interface b {
	(): void
}

if (a + 1 > 3) //... // O TypeScript infere através do contexto que estamos querando trabalhar com o valor 'a' e não com o tipo 'a'
	let x: a = 3 // Aqui já é o contrário.

```

## Polimorfismo

- Método `statics` não possuem acesso ao generics definido no escopo de uma classe (mesmo comportamento de não puder
  usar o os valores da classes com o `this`).

Veja:

```typescript
class MyMap<K, V> {
	constructor(initialKey: K, initialValue: V) {
		// ...
	}

	get(key: K): V {
		// ...
	}

	set(key: K, value: V): void {
		// ...
	}

	merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
		// ...
	}

	static of<K, V>(k: K, v: V): MyMap<K, V> {
		// ...
	}
}

```

## Mixins

Um mixin é apenas uma função que pega um construtor de classe e retorna um construtor de classe.
> A pesar do Typescript não ter keyworkds como `mixin` ou `trait` é bastante fácil implementar.

- Adiciona funcionalidades a classe sem precisar modificá-las;
- Parecido com o traits de outras linguagens, como o PHP, por exemplo;
- Usado para simular herança múltipla;
- `role-oriented programming` estilo de programação;
- Permite misturar comportamento e atributo entre classes;
- Pode ter construtores que podem ser chamados na mesma ordem das classes que foram mixadas;
- Apenas métodos concretos (não abstratos);
- Pode haver estados (propriedades da instância).
- [Ver mais...](https://www.typescriptlang.org/docs/handbook/mixins.html)

## Decorators

> Decorator é uma feature experimental do Typescript que nos dá uma sintaxe limpa para meta programação
> com classes, métodos, propriedades e parâmetros de métodos.
> É apenas uma sintaxe par chamar uma função em algo que você aplicou o @decorator.

Para cada tipo de decorador, o TypeScript requer que você tenha uma
função no escopo com o nome próprio e a assinatura necessária para esse tipo de decorador, ver tabela:

o que você irá decorar

| O que você ira decorar          | Tipo de assinatura esperado                                                                          |
|---------------------------------|------------------------------------------------------------------------------------------------------|
| `class`                         | `(constructor): {new(...any[])=> any})=>any`                                                         |
| `Method`                        | `(classPrototype: {}, methodName: string, descriptor:PropertyDescriptor) => any`                     |
| `Static method`                 | `(Constructor: {new(...any[]) => any}, methodName: string, descriptor: PropertyDescriptor) => any`   |
| `Static method parameter`       | `(Constructor: {new(...any[]) => any}, paramName: string, index:number) => void`                     |
| `Property`                      | `(classPrototype: {}, propertyName: string) => any`                                                  |
| `Static property`               | `(Constructor: {new(...any[]) => any}, propertyName: string) =>any`                                  |
| `Property getter/setter`        | `(classPrototype: {}, propertyName: string, descriptor:PropertyDescriptor) => any`                   |
| `Static property getter/setter` | `(Constructor: {new(...any[]) => any}, propertyName: string, descriptor: PropertyDescriptor) => any` |
