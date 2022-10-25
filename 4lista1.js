/*
Faça um algoritmo que receba 5 números e para cada um deles exibir na tela qual o
resultado da sua multiplicação pelos próximos 5 números em sequência.
Ex.: Números de entrada: 3, 11, 8, 21, 6
Saída:
Número: 3   Número: 11      Número: 6
3 x 4 = 12  11 x 12 = 132   6 x 7 = 42
3 x 5 = 15  11 x 13 = 143   6 x 8 = 48
3 x 6 = 18  11 x 14 = 154   6 x 9 = 54
3 x 7 = 21  11 x 15 = 165   6 x 10 = 60
3 x 8 = 24  11 x 16 = 176   6 x 11 = 66
*/

var numero
for (var contador = 0; contador < 5; contador++) {
    numero = parseInt(prompt("Insira um número"))
    console.log("Número ", numero)
    for (var i = numero + 1; i <= numero + 5; i++) {
        console.log(numero + " x " + i + " = " + (numero * i))
            }
    }