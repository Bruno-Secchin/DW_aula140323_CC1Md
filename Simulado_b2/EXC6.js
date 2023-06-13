// senha exemplo:
const senha = "Senha123"
function verificarSenha(senha) {
    // interrompe e avisa caso a senha contenha menos de 8 caracteres:
    if (senha.length < 8) {
        console.log("Senha deve conter no mínimo 8 caracteres.");
        return false;
    }
    // critérios da senha:
    var mai = false;    // letra maiúscula 
    var min = false;    // letra minúscula
    var num = false;    // número
    // loop que percorre os caracteres da senha:
    for (var i = 0; i < senha.length; i++) {
        var caractere = senha[i];
        // condições que checam os critérios:
        if (caractere >= 'A' && caractere <= 'Z') {
            mai = true;
        }
        else if (caractere >= 'a' && caractere <= 'z') {
            min = true;
        }
        else if (!isNaN(caractere)) {
            num = true;
        }
    }

    // exibição de avisos:
    if (!mai) {
        console.log("Senha deve conter ao menos um caractere maiúsculo.");
    }
    else if (!min) {
        console.log("Senha deve conter ao menos um caractere minúsculo.");
    }
    else if (!num) {
        console.log("Senha deve conter ao menos um número.");
    }
    else {
        console.log("Senha válida!");
    }

    return mai && min && num;
}
