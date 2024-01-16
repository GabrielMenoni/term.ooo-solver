def count_letter(lista):
    n = 0
    for chave in lista:
        if lista[chave] is not None:
            n += 1
    return n

def generate_indices(lista):
    indices = []
    for chave in lista:
        if lista[chave] is not None:
            indices.append(chave)
    return indices
            
def generate_empty(lista):
    empty = []
    for chave in lista:
        if lista[chave] is None:
            empty.append(chave)
    return empty
