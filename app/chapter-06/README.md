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
		friendList: { count: 10, friends: [{ firstName: '', lastName: '' }] },
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
	count:10,
	friendsList:[],
	userId:'100'
}

const a = get(response, 'userId')
console.log(a)
```
- `get` pega um objeto `O` e uma chave `K`
- `keyof` realizar a união de strings literal types
- 
