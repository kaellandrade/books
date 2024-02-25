## Programming TypeScript

<details>
  <summary>TypeScript: A 10_000 Foot View (Chap 02)</summary>

## O compilador

1. Programa analisado em AST(n abstract syntax tree);
2. AST é compilado para um bytecode;
3. Bytecode é avaliado em tempo de execução.

> O TypeScript em vez de compilar diretamente para bytecode, o Type-Script compila para… código JavaScript! (Transpile)

> Mas antes diss, existe progragrama especial que (typechecker) que verifica se seu código é typesafe.

1. TypeScript source -> TypeScript AST [TSC]
   - Aqui é usado os tipos declarados;
2. AST é verificada por typechecker [TSC]
   - Aqui é usado os tipos declarados;
3. TypeScript AST -> JavaScript source [TSC]
   - Aqui não é mais utilizado os tipos.
   ```
   Quando o TSC compila seu código de TypeScript para JS, ele não olha mais para os seus tipos.
   ```
4. JavaScript source -> JavaScript AST [JS]
5. AST -> bytecode [JS]
6. ByteCode é avaliado em tempo de execução[JS]

JavaScript engine (V8, Spidermonkey[Firefox], JSCore[Safari], Chakra[Edge])

## O sistema de tipos

> Um conjunto de regras que um verificador de tipos usa para atribuir tipos ao seu programa.

- Dinâmico
- Estático (TS is incrementally compiled statically typed language)

> O TypeScript é inspirado em ambos os tipos de sistemas de tipos: você pode anotar explicitamente seus tipos ou pode
> deixar o TypeScript inferir a maioria deles para você.

> Em geral, é uma boa ideia deixar o TypeScript inferir tantos tipos quanto possível para você, mantendo o código
> digitado explicitamente no mínimo.

Comparação entre os sistemas de tipos enter Js e TS, para ajudar criar uma modelo mental de como o TS funciona:

| Recursos do sistemas de tipos             | JS                     | TS                        |
| ----------------------------------------- | ---------------------- | ------------------------- |
| Como os tipos são vinculados ?            | Dinâmico               | Estático                  |
| Os tipos são convertidos automaticamente? | Sim                    | Não(principal)            |
| Quando os tipos são verificados?          | Tempo de execução      | Tempo de compilação       |
| Quando os erros são encontrados ?         | Em execução(a maioria) | Em compilação (a maioria) |

> Se você precisar converter tipos, faça-o explicitamente.

> O compilador TSC é escrito em TypeScript, ou seja, o TS é uma linguagem
>
> bootstrapping [self-hosting](https://robertheaton.com/2017/10/24/what-is-a-self-hosting-compiler/#:~:text=A%20self-hosting%20compiler%20is%20one%20that%20can%20compile,writing%20%3D%2C%20you%20write%20the%20actual%20word%20EQUALS.)

## [TSLint](https://palantir.github.io/tslint/)

- `npx tslint --init` - Para habilitar o tslint estilização de código

## Dicas

1. Instale o `ts-node` e use-o para compilar e executar seu TypeScript com um único comando.
2. Use uma ferramenta de scaffolding como `typescript-node-starter` para gerar rapidamente sua estrutura de pastas para
   você.

</details>

<details>
  <summary>Tudo sobre os (Chap 03)</summary>
  
  > Um conjunto de valores e o que você pode fazer com eles.

> Quando você vê que algo é do tipo T, você não apenas sabe que é um T, mas também sabe exatamente o que pode fazer com esse T (e o que não pode).

### Hierarquia de tipos

![alt](app/chapter-03/typeScript-type-hierarchy.drawio.svg)

## ABCs dos tipos

- `any`
  - Evite, assim como o fogo! (Utilizar noImplicitAny).
- `unknown`

  - Pode ser utilizado para valores desconhecidos, mas procure sempre conhecer seus valores!;
  - Também pode ser refinado.
  - Operadores que podem ser usados:

    > ==, ===, ||, &&, ?, !

  - Exemplo:

    ```typescript
    let a: unknown = 20; // TypesScript não inferirá nada sobre unknown;
    let b = a === 1234; // SIM! Podemos comparar os valores do tipo unknown, ou seja, utilizar os operadores relacionais.
    let c = a + 10; //  NÃO! Pois estamos pressupondo que ele é um número
    ```

- `boolean`
  Exemplo:
  ```Typescript
  let a = true // OK! boolean
  var b = false // OK! boolean
  const c = true // OK, PORÉM CONSTANTE. true
  let d: boolean = true // OK, Qualquer valor do conjunto boolean
  let e: true = true // type literals feature (um tipo que representa um único valor e nada mais)
  let f: true = false // ERROR, tipo literal apenas com valor true.
  ```
- `number`
  - Operações básicas aritiméticas, relacionais ...
  - Curiosidade! (Podemos utilizar numeric separators, separadores numéricos)
  ```typescript
  let oneMillion = 1_000_000; // Igual à 1000000
  let a: 1_000_000_000_000_000 = 1000000000000000; // Muito últil para números grandes
  let b: 100000 = 100_000;
  console.log(a + b);
  ```
- `bigint`
  - Operações com inteiros
  ```typescript
  let a: bigint = 10n;
  ```
- `string`
- `symbol  (ES2015).`

  - Alternativa para chave de strings em objetos e maps
  - Um Symbol é único
  - O principal objetivo dos Symbols no TypeScript (e JavaScript) é fornecer uma maneira de criar identificadores únicos
  - Symbols permitem que você crie propriedades de objeto que são únicas e não podem ser sobrescritas ou acessadas acidentalmente1. Isso é útil quando você está escrevendo uma biblioteca ou um framework e quer evitar conflitos com o código do usuário.

  ```typescript
  let a = Symbol('a');
  let b: symbol = Symbol('B');
  ```

  ```typescript
  // Exemplo de key usando Symbolo
  const sym = Symbol('teste');
  let obj = {
  	[sym]: 'value',
  };
  console.log(obj[sym]); // "value"
  ```

  ```typescript
  const e = Symbol('e'); // typeof e
  const f: unique symbol = Symbol('f'); // typeof f
  ```

  > Pense em símbolos únicos como outros tipos literais, como 1, verdadeiro ou “literal”. Eles são uma forma de criar um tipo que representa um determinado habitante do símbolo.

</details>
