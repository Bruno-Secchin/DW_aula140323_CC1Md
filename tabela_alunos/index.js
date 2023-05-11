function resetInputs() {
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = inputs[i].defaultValue;
    }
}


function InserirAluno() {

    var i0 = document.querySelector("#matricula");
    var i1 = document.querySelector("#nome");
    var i2 = document.querySelector("#faltas");
    var i3 = document.querySelector("#b1");
    var i4 = document.querySelector("#b2");
    var i5 = document.querySelector("#pr");

    var matricula = i0.value;
    var nome = i1.value;
    var faltas = i2.value;
    var b1 = parseFloat(i3.value);
    var b2 = parseFloat(i4.value);
    var media = parseFloat((b1 + b2) / 2);
    var pr = '-';
    var mf = '-';
    var sit;

    if (faltas > 20) {
        sit = 'REPROVADO';
    }
    else {
        if (media >= 7) {
            sit = 'APROVADO';
        }
        else {
            pr = parseFloat(i5.value);
            mf = parseFloat((media + pr) / 2);
            if (mf >= 5) {
                sit = 'APROVADO';
            }
            else {
                sit = 'REPROVADO';
            }
        }
    }

    var tabela = document.querySelector("body > table");

    var linha = tabela.insertRow(-1);

    linha.insertCell(0).innerText = matricula;
    linha.insertCell(1).innerText = nome;
    linha.insertCell(2).innerText = faltas;
    linha.insertCell(3).innerText = b1;
    linha.insertCell(4).innerText = b2;
    linha.insertCell(5).innerText = media;
    linha.insertCell(6).innerText = pr;
    linha.insertCell(7).innerText = mf;
    linha.insertCell(8).innerText = sit;
    resetInputs();
}