'''
Implementação simples do algoritmo de Dijkstra.
Aqui não implementei um FramWork para grafos. 
Apenas usei uma tabela Hash para um caso especial.
'''
# -> Criando o Grafo
grafo = dict()
INFINITO = float('inf')

grafo['inicio'] = {}
grafo['inicio']['a'] = 6
grafo['inicio']['b'] = 2

grafo['a'] = {}
grafo['a']['fim'] = 1

grafo['b'] = {}
grafo['b']['a'] = 3
grafo['b']['fim'] = 5

grafo['fim'] = {}

# -> Criando a tabela de Custos
custos = {}
custos['a'] = 6
custos['b'] = 2
custos['fim'] = INFINITO

# -> Tabela para definir os pais

pais = {}
pais['a'] = 'inicio'
pais['b'] = 'inicio'
pais['inicio'] = None
pais['fim'] = None

# -> Array de vértices processados

processados = []


def ache_no_custo_mais_baixo(custos: dict) -> str:
    custo_mais_baixo = INFINITO
    nodo_custo_mais_baixo = None
    for nodo in custos:
        custo = custos[nodo]
        if(custo < custo_mais_baixo and nodo not in processados):
            custo_mais_baixo = custo
            nodo_custo_mais_baixo = nodo
    return nodo_custo_mais_baixo


def recupera_caminho(pais: dict, incio: str, fim: str) -> str:
    '''
    Função inspirada no Livro do Cormen Chapter 22
    '''
    if(incio == fim):
        print(incio)
    elif(pais[fim] == None):
        print(f'Nenhum caminho de {incio} para {fim}')
    else:
        recupera_caminho(pais, incio, pais[fim])
        print(fim)


nodo = ache_no_custo_mais_baixo(custos)

while nodo is not None:
    custo = custos[nodo]
    vizinhos = grafo[nodo]
    for n in vizinhos.keys():
        novo_custo = custo+vizinhos[n]
        if(custos[n] > novo_custo):
            custos[n] = novo_custo
            pais[n] = nodo
    processados.append(nodo)
    nodo = ache_no_custo_mais_baixo(custos)

recupera_caminho(pais, 'inicio', 'fim')
