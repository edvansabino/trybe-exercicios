
// 2 - Desenvolva um algoritmo que conte quantos números, em um intervalo entre dois números, são divisíveis por 3. Exemplo: 1 e 20.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta (pode inventar uma). 
// Não conta pra ninguém, mas no intervalo entre 2 e 150 existem 50 números divisíveis por 3 ;)


let number = 0;

for (let i = 2; i <= 150; i += 1) {
   if (i % 3) {
  number += 1
   }
      if (number == 50) {
        console.log('Xablau');
      }
}
 

