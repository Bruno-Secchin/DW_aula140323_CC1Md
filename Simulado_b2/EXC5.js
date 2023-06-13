// vetor utilizado:
const v = [1, 2, 3, 1, 1, 2, 4];
function frequenciaElementos(v) {
    // objeto que conterá os elementos e suas frequências:
    var freq = {};

    for (i = 0; i < v.length; i++) {
        // define cada elemento
        var elemento = v[i];
        // condições que define a frequência como 1 caso o elemento ainda não exista, ou acrescenta 1 caso já exista:
        if (freq[elemento]) {
            freq[elemento]++;
        }
        else {
            freq[elemento] = 1;
        }
    }
    // exibição:
    console.log(freq);
}