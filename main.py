# import de funções auxiliares
import Misc.auxFunctions as functions

# Introdução / Guia de como utilizar
print("===============================================================")
print('Bem vindo ao solucionador de term.ooo!')
print('Abaixo vou solicitar as letras que você *ja possui* a posicao. Caso')
print("não possua a letra coloque um número como forma de 'coringa'.")
print("===============================================================")

# Definição do dicionario
lista = {1:'', 2:'', 3:'', 4:'', 5:''}

# Receber e tratar entradas
for i in range(5):
    insert = input(f"digite a {i+1}° letra: ")
    try:
        insert = int(insert)
        lista[i+1] = None
    except:
        lista[i+1] = insert.lower()

# Utilização de funções auxiliares
n = functions.count_letter(lista)
indices = functions.generate_indices(lista)
empty = functions.generate_empty(lista)

# Texto de explicação para as 'hints'
print("===============================================================")
print('Agora vou solicitar as letras que você ainda não possui certeza')
print('da posicao correta, mas que estão na palavra. Caso não')
print("não possua a letra coloque um número como forma de 'coringa'.")
print("===============================================================")

hints = []

# Entrada e tratamento das 'hints'
for i in range(5-n):
    insert = input(f"digite a {i+1}° letra: ")
    try:
        insert = int(insert)
        pass
    except:
        hints.append(insert.lower())
      
# Bloco de leitura e escrita das respostas        
try:
        # Abertura dos dois arquivos
    with open('Misc/terms.txt', 'r') as terms:
        with open('answers.txt', 'w') as answers:
            word = terms.readline()
            while (word != ''):
                # Inicialização das variavéis auxiliares / reset
                indicator = 0
                aux = 0
                found = 1

                # Verifica se as letras conhecidas estão na palavra
                for number in indices:
                    if word[number-1] != lista[number]:
                        indicator = 1
                
                # Verifica se as 'hints' estão na palavra
                if indicator == 0:
                    for hint in hints:
                        for emp in empty:
                            if word[emp-1] == hint:
                                aux = 1
                        
                        if aux == 1:
                           aux = 0 
                        else:
                           found = 0     
                        
                else:
                    indicator = 0
                    found = 0
                
                # Caso os dados esteja de acordo, escreve a palavra no arquivo
                if found == 1:
                    answers.write(word)
                
                # Le a proxima palavra
                word = terms.readline()
            answers.close()
        terms.close()
            
    print("foi gerado um arquivo 'answers.txt' com todas as soluções possiveis.")
except:
    print('Ocorreu algum erro inesperado, encerrando programa.')
    exit()