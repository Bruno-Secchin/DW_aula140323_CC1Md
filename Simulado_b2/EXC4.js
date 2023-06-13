// vetor exemplo:
const v = [5, 7, 9, 1, 3];
function vetorInfo(v) {
    var hn = 0;         // var que armazenará o maior número
    var ln = Infinity;  // var que armazenará o menor número
    var media = 0;      // var que armazenará a média aritmética
    // loop que percorre o vetor:
    for (i = 0; i < v.length; i++) {
        // condição que define o maior número:
        if (hn < v[i]) {
            hn = v[i];
        }
        // condição que define o menor número:
        if (ln > v[i]) {
            ln = v[i];
        }
        // soma dos números do vetor:
        media = media + v[i];
    }
    // cálculo da média aritmética:
    media = media / v.length;
    // exibição:
    console.log("Maior número: " + hn);
    console.log("Menor número: " + ln);
    console.log("Média aritmética: " + media);
    return;
}