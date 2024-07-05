TODO: Implementar o restante do modelo do Chess.

# Classes e Interfaces

## Classes

### Retornando `this`

o `this` pode ser considerado um tipo de retorno. Isso é bastante útil para classes que herdam de outras classes. Por exemplo, quando retornamos o `this` de um método mãe que será implementado em uma classe filha também, o `this` irá pegar a instância da classe (mãe ou filha).

Esse recurso é utilizado para criar `chained API`(apis que são chamadas sucessivamentes: Exemplo `set.add(2).add(3).add(4)...`)

## Interfaces

> Aliases de tipo e interfaces são principalmente duas sintaxes para a mesma coisa, mas há algumas pequenas diferenças.

> As interfaces não precisam estender outras interfaces. Na verdade, uma interface pode estender qualquer forma: **um tipo de objeto, uma classe ou outra interface**.


### Interface vs Types qual a diferença ?
- type alias são mais gerais (seu lado direito pode ser qualquer outro tipo incluindo operadores | ou &) para interfaces o lado direito deve ser um shape.
por exemplo não daria para fazer isso com interfaces.
```typescript
type A = number
type B = A | string
```
- Quando extendemos uma interface o typescript garante que a interface que você está estendendo seja atribuível a extenção.

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
type A =  {
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
    a:string
}

interface A {
    b:string
}

interface A{
    c:string
}

class Test implements A{
    a: string;
    b: string;
    c: string;
}
```
