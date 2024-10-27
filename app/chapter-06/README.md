## Notes

> Uma função A é um subtipo da função B se A tem a mesma ou menor aridade (número de parâmetros) que B e
- Esse tipo de A não é especificado ou é >: (supertype) B é esse tipo. 
- Cada um dos parâmetros de A é >: seu parâmetro correspondente em B.
- O tipo de retorno de A é <: o tipo de retorno de B

## Refinamento - Refinement

O Typescript executa inferências de tipo baseada em fluxo, que é um tipo de execução simbólica em
que o verificador de tipo usa instruções de fluxo de controle como `if, && ||`. Esse é um recurso que 
poucas linguagens tem. (Kotlin, Flw, Ceylon e claro, TypeScript)

- Symbolic execution (Execução simbólica) uma forma de análise de programa onde você usa um programa especial
- chamado avaliador simbólico para executar seu programa da mesma forma que um runtime faria, mas sem atribuir valores definidos
- a variáveis.

A ideia de refinamento acontece muita das vezes quando realizamos uma verificação `if`.