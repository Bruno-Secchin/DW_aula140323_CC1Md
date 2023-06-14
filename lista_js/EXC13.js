// string exemplo:
var str = "Berimbau";
function contarVogais(str) {
    // cria o vetor contendo as vogais:
    const vogais = ["a", "e", "i", "o", "u"];
    // define que o contador de quantidade começará em 0:
    var quantidade = 0;
    // acrescenta 1 no contador sempre que uma vogal for encontrada na string:
    for (i = 0; i < str.length; i++) {
        if (vogais.includes(str[i].toLowerCase())) {
            quantidade++;
        }
    }
    // exibe e retorna o resultado:
    console.log('"' + str + '" possui ' + quantidade + " vogais.");
    return quantidade;
}