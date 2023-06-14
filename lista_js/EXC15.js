function gerarCor() {
    // cria a variável que terá o código da cor:
    var cor = "#";
    // gera os números de 0 a 255 em hexadecimal:
    for (i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 255); // gera um número inteiro entre 0 e 255
        var hex = num.toString(16); // transforma o número em hexadecimal
        if (hex.length === 1) { // acrescenta um 0 a esquerda caso o número hexadecimal gerado tenha apenas 1 caractere
            hex = "0" + hex;
        }
        cor = cor + hex; // variável cor recebe os números gerados
    }
    // altera a cor de fundo para a cor gerada:
    var Body = document.querySelector("body");
    Body.style.backgroundColor = cor;
    return cor;
}