# Solucionador term.ooo
(english version ahead)

## Oque é term.ooo?
Term.ooo é um jogo semelhante ao Wordle, porém com palavras em português e desafios que envolvem mais de uma palavra.

O objetivo do jogo é identificar uma palavra específica em um número determinado de tentativas. Em cada tentativa, o jogador escreve uma palavra de cinco letras e verifica quais letras estão presentes na palavra-alvo, sendo:

$${\color{green}Letra \space \color{green}verde \space \color{green}:}$$
Letra verde: está na palavra e na posição correta.
<span style="color:yellow">Letra amarela:</span> está na palavra, mas não na posição correta.
<span style="color:gray">Letra cinza:</span> não faz parte da palavra.
Dessa forma, o desafio é encontrar a palavra correta dentro do limite de tentativas disponíveis.

## Oque faz esse algoritmo?
Este algoritmo encontra a palavra correta no jogo term.ooo, totalmente desenvolvido em Python.
Para construir essa ferramenta, utilizei conhecimentos em processamento de dados para criar um dicionário de palavras possíveis. O programa permite que você informe as letras que já tem certeza e também as letras que sabe que estão na palavra, mas desconhece suas posições exatas. Com base nessas informações, o programa pesquisa no dicionário e filtra as palavras possíveis, apresentando o resultado no arquivo "answer.txt".

## Como usar:
Rode o programa main.py e siga as instruções fornecidas no console.

Link do jogo: https://term.ooo/

# term.ooo solver

## What is Term.ooo?
Term.ooo is a game similar to Wordle but with words in Portuguese (PT-BR) and challenges involving more than one word.

The objective of the game is to identify a specific word within a set number of attempts. In each attempt, the player enters a five-letter word and checks which letters are present in the target word, where:

<span style="color:green">Green letter:</span> is in the word and in the correct position.
<span style="color:yellow">Yellow letter:</span> is in the word but not in the correct position.
<span style="color:gray">Gray letter:</span> is not part of the word.
Thus, the challenge is to find the correct word within the given number of attempts.

## What this algorithm do?
This is a algorithm to find the correct word in the game term.ooo, completely developed in Python.
To create this tool, I employed knowledge in data processing to build a dictionary of possible words. The program allows you to input the letters you are certain about and also the letters you know are in the word but are unsure of their exact positions. Based on this input, the program searches the dictionary and filters the possible words, presenting the result in the "answer.txt" file.

## How to use:
run main.py and follow to instructions in the console.

game link: https://term.ooo/

![image](https://github.com/GabrielMenoni/term.ooo-solver/assets/62768011/ae368958-bb53-4ff0-8832-65a8f6acf773)
