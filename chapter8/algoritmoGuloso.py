# Esposta
estacoes_finais = set()

estados_abranger = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])

estacoes = dict()
# Estacões -> Conjunto de estados que esta estação cobre.
estacoes['kum'] = set(['id', 'nv', 'ut'])
estacoes['kdois'] = set(['wa', 'id', 'mt'])
estacoes['ktres'] = set(['or', 'nv', 'ca'])
estacoes['kquatro'] = set(['nv', 'ut'])
estacoes['kcinco'] = set(['ca', 'az'])


while estados_abranger:
    melhor_estacao = None
    estados_cobertos = set()
    for estacao, estados_por_estacao in estacoes.items():
        # cobertos é é o conjunto de estados não cobertos que essa estação abrange.
        cobertos = estados_abranger & estados_por_estacao
        if(len(cobertos) > len(estados_cobertos)):
            melhor_estacao = estacao
            estados_cobertos = cobertos
    estados_abranger -= estados_cobertos
    estacoes_finais.add(melhor_estacao)

print(estacoes_finais)