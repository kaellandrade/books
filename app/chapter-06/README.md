## Notes

> Uma função A é um subtipo da função B se A tem a mesma ou menor aridade (número de parâmetros) que B e

- Esse tipo de A não é especificado ou é >: (supertype) B é esse tipo.
- Cada um dos parâmetros de A é >: seu parâmetro correspondente em B.
- O tipo de retorno de A é <: o tipo de retorno de B

## Refinamento - Refinement

O Typescript executa inferências de tipo baseada em fluxo, que é um tipo de execução simbólica em
que o verificador de tipo usa instruções de fluxo de controle como `if, && ||`. Esse é um recurso que
poucas linguagens tem. (Kotlin, Flw, Ceylon e claro, TypeScript)

- Symbolic execution (Execução simbólica) uma forma de análise de programa onde você usa um programa especial chamado avaliador simbólico para executar seu programa da mesma forma que um runtime faria, mas sem atribuir valores
  definidos a variáveis.

A ideia de refinamento acontece muita das vezes quando realizamos uma verificação `if`.

## Type Operators for Object Types

## The keying-in operator

```typescript
type APIResponse = {
    user: {
        userId: string
        friendList: {
            count: number
            friends: {
                firstName: string
                lastName: string
            }[]
        }
    }
}
const resposta: APIResponse = {
    user: {
        userId: '123',
        friendList: {count: 10, friends: [{firstName: '', lastName: ''}]},
    },
};

type FriendList = APIResponse['user']['friendList']
type Friend = FriendList['friends'][number]
const testetest: Friend = resposta.user.friendList.friends[2];

function renderFriendList(friendList: FriendList) {
    // ...
}
```

## The keyof operator

```typescript
type CrazyType = {
    count: number,
    userId: string
    friendsList: { name: string, age: number }[]
}

function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
    return o[k];
}

const response: CrazyType = {
    count: 10,
    friendsList: [],
    userId: '100'
}

const a = get(response, 'userId')
console.log(a)
```

- `get` pega um objeto `O` e uma chave `K`
- `keyof` realizar a união de strings literal types

## Companion Object Patter (Objeto companheiro ?)

Esta feature foi inspirada na linguagem Scala e é uma forma de juntar Classes e objectos que compartilham o mesmo nome.
Vejamos:

```typescript

type Moeda = {
    unidade: 'EUR' | 'GBP' | 'JPY' | 'USD',
    valor: number
}
// isso é permitido pois o TS separa o escopo de tipos do escopo de valures.
let Moeda = {
    PADRAO: 'USD',
    from(valor: numero, unidade = Moeda.PADRAO): Moeda {
        return {unidade, valor}
    }
}
// Utilize essa feature sempre que você perceber que objetos e tipos estão semanticamente
// relacionados, com o objeto provendo um método utilitários que opera em cima do tipo.
```

## Type Guard
### User-Defined type guard
Feature que permite o usuário definir seus type-guards por meio do operador `is`, uma função user-defined type guard é limitada
a um único parâmetro, porém ela pode receber valores complexos.

Veja um exemplo dessa feature em ação:


```typescript
function isString(a: unknown): a is string {
  return typeof a === 'string'
}

function parseInput(input: string | number) {
  let formattedInput: string
  if (isString(input)) {
    formattedInput = input.toUpperCase()
  }
}
```

Note que se no lugar de `a is string` utilizássemos apenas o retorno `boolean` o typescript na função `pserseInput`
não reconheceria que input.roUppCase() seria uma `string`. Isso porque o refinamento de tipo do typescript só funciona
em um escopo, ou seja, ele não é transferível.

### Conditional Type 
Podemos definir tipos de retornos condicionais!
Com base em uma condição ternária podemos definir um novo tipo de retorno, esse recurso
geralmente é utulizado com Generics. Veja o seguinte exemplo:

```typescript
interface IdLabel {
    id: number /* some fields */;
}
interface NameLabel {
    name: string /* other fields */;
}

// Condiditional type (poderoso com generics)
type NameOrId<T extends number | string> = T extends number
        ? IdLabel
        : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    if (typeof idOrName === "number") {
        return { id: idOrName } as NameOrId<T>;
    } else {
        return { name: idOrName } as NameOrId<T>;
    }
}

let label = createLabel(5555); // label será Idlabel
let label2 = createLabel('nome'); // label será NameLabel
console.log(label)
```
---

### Types branding
Permite que o Typescript  simule uma estrutura de tipos nominais, ver mais sobre no capítulo 6.

## Distributive types
Permite criar utilitários de tipos interessantes tais como Excluded<> e vários outros, até personalizados.

## Type Assetions
- `as` permite inferir um tipo a uma váriável (evitar usar assim que possível)
- `<T>variavel` preferível utilizar a primeira versão com `as`, porém são equivalentes

## Definite assignment Assertion
`let userId!:string;` utilizado para garantir ao TS que essa variável estará preenchida.
Utilizada em alguns frameworks como Angular, por exemplo, quando passamos props para componentes filhos.

## Nonnull Assertions
`document.getElementById(dialog.id!)!` sempre que percebemos que nosso código está com uma
quantidade significativa de nonnull assetions está na hora de refatorá-lo.

