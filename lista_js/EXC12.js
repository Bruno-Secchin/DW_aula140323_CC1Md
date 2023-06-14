// número exemplo:
var num = 25;
function quadradoPerfeito(num) {
    // calcula a raiz do número:
    var raiz = Math.sqrt(num);
    // verifica se a raiz é um número inteiro ou não:
    if (Number.isInteger(raiz)) {
        console.log(num + " é um quadrado perfeito.");
        return true;
    }
    console.log(num + " não é um quadrado perfeito.");
    return false;
}