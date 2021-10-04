from collections import deque


class Grafo:
    '''
    FrameWork simples para grafo direcionado.
    '''

    def __init__(self) -> None:
        self.grafo = {}

    def getVizinhos(self, verticce):
        '''
        Recebe um vértice e retorna a lista de seus viziknhos.
        '''
        return self.grafo[verticce]

    def addVertice(self, Vertice):
        '''
        Recebe um Vertice e adiciona ao grafo.
        '''
        if(self.grafo.get(Vertice) == None):
            self.grafo[Vertice] = []
        else:
            print('Vertice já foi adicionado.')

    def addAresta(self, verticeA, VerticeB):
        '''
        Recebe dois vértices e conecta-os.
        '''
        if(self.grafo.get(verticeA) != None and self.grafo.get(VerticeB) != None):
            self.grafo[verticeA].append(VerticeB)
        else:
            print('Verifique se os vértices estão no grafo.!')

    def pessoa_e_programador(self, pessoa):
        '''
        Recebe uma pessoa, se o nome dela contiver a letra P
        então ela é programador(a)
        '''
        return 'p' in pessoa.lower()

    def pesquisaLargura(self, start):
        '''
            Realiza uma pesquisa em largura.
        '''
        fila_de_pesquisa = deque()
        fila_de_pesquisa += self.grafo[start]

        ja_verificados = []

        while fila_de_pesquisa:
            pessoa = fila_de_pesquisa.popleft()
            if(pessoa not in ja_verificados):
                if(self.pessoa_e_programador(pessoa)):
                    print(f'{pessoa}, é programador!')
                    return True
                else:
                    fila_de_pesquisa += self.getVizinhos(pessoa)
                    ja_verificados.append(pessoa)

        return False

    def __str__(self) -> str:
        saidaStr = ''
        for vertice in self.grafo:
            saidaStr += f'{vertice} -> {self.grafo[vertice]}\n'
        return saidaStr


grafo = Grafo()

grafo.addVertice('eu')
grafo.addVertice('clarie')
grafo.addVertice('bob')
grafo.addVertice('alice')
grafo.addVertice('peggy')
grafo.addVertice('jonny')
grafo.addVertice('thom')
grafo.addVertice('anuj')

grafo.addAresta('eu', 'clarie')
grafo.addAresta('eu', 'alice')
grafo.addAresta('eu', 'bob')

grafo.addAresta('alice', 'peggy')
grafo.addAresta('bob', 'peggy')
grafo.addAresta('bob', 'anuj')
grafo.addAresta('clarie', 'thom')
grafo.addAresta('clarie', 'jonny')


print(grafo.pesquisaLargura('eu'))
