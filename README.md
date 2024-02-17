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
|-------------------------------------------|------------------------|---------------------------|
| Como os tipos são vinculados ?            | Dinâmico               | Estático                  |
| Os tipos são convertidos automaticamente? | Sim                    | Não(principal)            |
| Quando os tipos são verificados?          | Tempo de execução      | Tempo de compilação       |
| Quando os erros são encontrados ?         | Em execução(a maioria) | Em compilação (a maioria) |

> Se você precisar converter tipos, faça-o explicitamente.

> O compilador TSC é escrito em TypeScript, ou seja, o TS é uma linguagem
>
bootstrapping [self-hosting](https://robertheaton.com/2017/10/24/what-is-a-self-hosting-compiler/#:~:text=A%20self-hosting%20compiler%20is%20one%20that%20can%20compile,writing%20%3D%2C%20you%20write%20the%20actual%20word%20EQUALS.)

## [TSLint](https://palantir.github.io/tslint/)

- `npx tslint --init` - Para habilitar o tslint estilização de código

## Dicas

1. Instale o `ts-node` e use-o para compilar e executar seu TypeScript com um único comando.
2. Use uma ferramenta de scaffolding como `typescript-node-starter` para gerar rapidamente sua estrutura de pastas para
   você.

</details>

<details>
  <summary>All About Types (Chap 03)</summary>
</details>