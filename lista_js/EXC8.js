// string exemplo:
var str = "Race car";
function verificarPalindromo(str) {
    // remove espaços e pontuações da string:
    const newstr = str.toLowerCase().replace(/[\W_]/g, '');

    // compara a primeira letra com a última,  a segunda com a penúltima, e assim sucessivamente, caso alguma comparação resulte em false sabemos que a string não é um palíndromo:
    for (let i = 0; i < Math.floor(newstr.length / 2); i++) {
        if (newstr[i] !== newstr[newstr.length - 1 - i]) {
            console.log('"' + str + '"' + " não é um palíndromo.");
            return false;
        }
    }
    // caso a comparação não falhe, a string é um palíndromo:
    console.log('"' + str + '"' + " é um palíndromo.");
    return true;
}

