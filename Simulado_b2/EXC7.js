// matriz exemplo:
const matriz = [1, 2, 2, 3, 1, 4];
function removerRepetidos(matriz) {
    const v = []; // vetor(nova matriz)
    // loop que percorre a matriz:
    for (let i = 0; i < matriz.length; i++) {
        // condição que adiciona o número ao vetor caso ainda não esteja lá:
        if (!v.includes(matriz[i])) {
            v.push(matriz[i]);
        }
    }
    // exibição:
    console.log(v);
    return v;
}
