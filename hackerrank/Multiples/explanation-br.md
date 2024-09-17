Este desafio é sobre arredondamento de notas de acordo com uma política específica da HackerLand University.

A política de arredondamento é a seguinte:

Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, a nota é arredondada para cima até o próximo múltiplo de 5.
Se a nota for menor que 40, não ocorre arredondamento, pois o resultado ainda será uma nota reprovatória.
Por exemplo:

Se a nota for 73, ela será arredondada para 75, porque a diferença entre 73 e 75 é 2, que é menor que 3.
Se a nota for 67, não há arredondamento, pois 67 não é menor que 40.
Se a nota for 38, ela será arredondada para 40, pois 40 - 38 = 2, que é menor que 3.
Se a nota for 33, não há arredondamento, pois é menor que 40.
A função gradingStudents recebe uma lista de notas e retorna as notas após o arredondamento.

Para implementar isso, você pode seguir estes passos:

Percorra cada nota na lista.
Verifique se a nota é menor que 40. Se for, não faça arredondamento.
Caso contrário, verifique se a diferença entre a nota e o próximo múltiplo de 5 é menor que 3. Se for, arredonde a nota para cima até o próximo múltiplo de 5.
Caso contrário, mantenha a nota como está.