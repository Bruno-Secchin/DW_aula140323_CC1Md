// variável exemplo:
var num = 29;
function verificarPrimo(num) {
    // verifica se o número é menor que 2, pois não são primos
    if (num < 2) {
        console.log("O número " + num + " não é primo.");
        return false;
    }

    // verifica se o número é divisível por algum valor que não seja ele mesmo e 1:
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("O número " + num + " não é primo.");
            return false;
        }
    }

    // se o número não foi divisível por nenhum valor ele é primo
    console.log("O número " + num + " é primo.");
    return true;
}
