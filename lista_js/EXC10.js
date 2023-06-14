// strings exemplo:
var str1 = "Riven";
var str2 = "Ivern";
function verificarAnagrama(str1, str2) {
    // retira caracteres não-letras das strings:
    str1 = str1.toLowerCase().replace(/[\W_]/g, '');
    str2 = str2.toLowerCase().replace(/[\W_]/g, '');
    // verifica se as strings possuem a mesma quantidade de letras:
    if (str1.length !== str2.length) {
        console.log("Não são anagramas.");
        return false;
    }
    else {
        // cria vetores contendo as letras presentes nas strings:
        var v1 = str1.split('');
        var v2 = str2.split('');
        // ordena os elementos dos vetores
        v1.sort();
        v2.sort();
        // verifica se os elementos(letras) dos vetores são diferentes:
        for (i = 0; i < v1.length; i++) {
            if (v1[i] !== v2[i]) {
                console.log("Não são anagramas.");
                return false;
            }
        }
        // caso os elemtentos não sejam diferentes então as palavras são anagramas:
        console.log("São anagramas.");
        return true;
    }
}