def quickSort(lista: list) -> list:
    if(len(lista) < 2):
        return lista
    else:
        pivo = lista[0]
        menores = [item for item in lista[1:] if item < pivo]
        maiores = [item for item in lista[1:] if item >= pivo]
        return quickSort(menores) + [pivo] + quickSort(maiores)


print(quickSort([3,2,1]))
