# 2635. Aplicar Transformação em Cada Elemento do Array

Dado um array inteiro arr e uma função de mapeamento fn, devolva um novo array com uma transformação aplicada a cada elemento.

A matriz devolvida deve ser criada de forma a que returnedArray[i] = fn(arr[i], i).

Resolva o problema sem o método Array.map incorporado.

Exemplo 1:

Entrada: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Saída: [2,3,4]
Explicação:
const newArray = map(arr, plusone); // [2,3,4]
A função aumenta cada valor na matriz em uma unidade. 
Exemplo 2:

Entrada: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Saída: [1,3,5]
Explicação: A função incrementa cada valor pelo índice em que ele reside.
Exemplo 3:

Entrada: arr = [10,20,30], fn = function constant() { return 42; }
Saída: [42,42,42]
Explicação: A função sempre retorna 42.