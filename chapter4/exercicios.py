'''
Função soma recursiva.
'''
def somaRec(lista: list) -> int:
    if(len(lista) == 1):
        return lista[0]
    elif(len(lista) == 0):
        return 0
    else:
        return lista[0] + somaRec(lista[1:])


'''
Função recursiva que conta número de itens.
'''
def myLen(lista: list) -> int:
    if(len(lista) == 0):
        return 0
    else:
        return 1 + myLen(lista[1:])

'''
Valor mais alto em uma lista.
'''
def maxValue(lista: list):
    if(len(lista) == 2):
        return lista[0] if lista[0] > lista[1] else lista[1]
    submaximo = maxValue(lista[1:])
    return lista[0] if lista[0] > submaximo else submaximo


print(maxValue([1, 2,3,4,5]))
