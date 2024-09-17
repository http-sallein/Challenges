Escreva uma função createCounter. Deve aceitar um número inteiro inicial init. Deve devolver um objeto com três funções.

As três funções são:

increment() aumenta o valor atual em 1 e depois devolve-o.
decrement() reduz o valor atual em 1 e depois devolve-o.
reset() define o valor atual para init e depois devolve-o.
 

Exemplo 1:

Entrada: init = 5, chamadas = [“increment”, “reset”, “decrement”]
Saída: [6,5,4]
Explicação:
const counter = createCounter(5);
contador.incrementar(); // 6
contador.reset(); // 5
contador.decremento(); // 4
Exemplo 2:

Entrada: init = 0, chamadas = [“incrementar”, “incrementar”, “decrementar”, “reset”, “reset”]
Saída: [1,2,1,0,0]
Explicação:
const counter = createCounter(0);
contador.increment(); // 1
contador.incrementa(); // 2
counter.decrement(); // 1
counter.reset(); // 0
contador.reset(); // 0
 