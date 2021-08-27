from math import floor


def teste(lista: list, item: int) -> int:
    baixo = 0
    alto = len(lista) - 1
    totalFor = 0
    while (baixo <= alto):
        totalFor += 1
        meio = floor((baixo + alto)/2)
        chute = lista[meio]

        if(chute == item):
            return meio

        if(item > chute):
            baixo = meio + 1
        else:
            alto = meio - 1
        print(totalFor)
    return None


print(teste([i for i in range(0, 40000+1)], 40000))
