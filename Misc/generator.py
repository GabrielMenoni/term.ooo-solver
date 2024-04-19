terms = open('terms.txt', 'w')

with open ('dicionario.txt', 'r') as dicionario:
    for linha in dicionario:
        if len(linha) == 6:
            terms.write(linha.lower())
dicionario.close()

terms.close()