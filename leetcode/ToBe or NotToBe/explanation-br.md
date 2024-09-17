Escreva uma função expect que ajude os programadores a testar o seu código. Deve receber qualquer valor val e devolver um objeto com as duas funções seguintes.

toBe(val) aceita outro valor e devolve verdadeiro se os dois valores === um ao outro. Se não forem iguais, deve lançar um erro “Not Equal”.
notToBe(val) aceita outro valor e devolve verdadeiro se os dois valores !== um ao outro. Se forem iguais, deve lançar um erro “Equal”.
 

Exemplo 1:

Entrada: func = () => expect(5).toBe(5)
Saída: {“valor”: true}
Explicação: 5 === 5, então essa expressão retorna true.
Exemplo 2:

Entrada: func = () => expect(5).toBe(null)
Saída: {“error”: “Not Equal”}
Explicação: 5 !== null então essa expressão lança o erro “Not Equal”.
Exemplo 3:

Entrada: func = () => expect(5).notToBe(null)
Saída: {“value”: true}
Explicação: 5 !== null então essa expressão retorna true.