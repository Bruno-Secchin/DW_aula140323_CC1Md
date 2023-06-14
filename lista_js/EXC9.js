// número exemplo:
var num = 5;
function fatorial(num) {
    resultado = num; // inicio o resultado sendo = ao número inserido
    // se o número inserido foi 0 ou 1 a fatorial é = 1
    if (num === 0 || num === 1) {
        return 1;
    }
    // multiplica o número inserido por todos seus inteiros anteriores que são maiores que 0:
    for (i = num - 1; i > 0; i--) {
        resultado = resultado * i;
    }
    return resultado;
}