from math import inf
'''
Recebe um array e a posiçao a qual por onde
devemos começar a procurar o menor elemento.
'''
def buscaMenor(arr, start=0):
    menor = inf
    menorIndice = None
    for i in range(start, len(arr)):
        if(arr[i] < menor):
            menor = arr[i]
            menorIndice = i
    return menorIndice

def ordenacaoPorSelecao(arr):
    for i in range(len(arr)):
        indiceMenor = buscaMenor(arr, i)
        [arr[i], arr[indiceMenor]] = [arr[indiceMenor], arr[i]]
    return arr


print(ordenacaoPorSelecao([5, 3, 6, 2, 10]))
