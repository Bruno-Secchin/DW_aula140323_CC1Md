// variável exemplo:
var num = 89;
function verificarPrimo(num) {
    // verifica se o número é menor que 2, pois não são primos
    if (num < 2) {
        return false;
    }

    // verifica se o número é divisível por algum valor que não seja ele mesmo e 1:
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    // se o número não foi divisível por nenhum valor ele é primo
    return true;
}

function primoFibonacci(num) {
    // cria a sequência de fibonacci:
    var seqFibonacci = [1, 1];
    // verifica se o número é primo, se for dá continuidade à verificação:
    if (verificarPrimo(num)) {
        // gera os números da sequência de Fibonacci no vetor:
        while (seqFibonacci[0] < num) { // o loop é interrompido no primeiro número de Fibonacci que for maior ou igual ao inserido
            var soma = seqFibonacci[0] + seqFibonacci[1];
            seqFibonacci.unshift(soma); // os números de Fibonacci gerados são adicionados sempre na posição 0 do vetor
        }
        // se o último número de Fibonacci adicionado for igual ao número inserido, isso significa que ele pertence à sequência de Fibonacci:
        if (num === seqFibonacci[0]) {
            console.log(num + " é primo de Fibonacci.");
            return true;
        }
        else {
            console.log(num + " é primo, mas não é da sequência de Fibonacci.");
            return false;
        }
    }
    else {
        console.log(num + " não é primo, logo não é primo de Fibonacci.");
        return false;
    }
}