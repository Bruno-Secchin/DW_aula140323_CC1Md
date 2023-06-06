function gerarCartela() {
    // Obtém o nome digitado no input
    var nome = document.querySelector('input[name="nome"]').value;

    // Verifica se o input está vazio
    if (nome === '') {
        alert('Por favor, insira o nome da cartela.');
        return;
    }

    // Cria a section para a cartela
    var section = document.createElement('section');
    section.classList.add('cartelas'); // Adiciona a classe "cartelas" à section

    // Cria o elemento h4 com o texto do nome
    var h4 = document.createElement('h4');
    h4.textContent = nome;

    // Cria a tabela
    var table = document.createElement('table');

    // Função para embaralhar um arranjo de números
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Embaralha os números de cada coluna
    var numerosB = shuffleArray(Array.from({ length: 15 }, (_, index) => index + 1));
    var numerosI = shuffleArray(Array.from({ length: 15 }, (_, index) => index + 16));
    var numerosN = shuffleArray(Array.from({ length: 15 }, (_, index) => index + 31));
    var numerosG = shuffleArray(Array.from({ length: 15 }, (_, index) => index + 46));
    var numerosO = shuffleArray(Array.from({ length: 15 }, (_, index) => index + 61));

    // Cria a primeira linha com as letras
    var row1 = document.createElement('tr');
    var letras = ['B', 'I', 'N', 'G', 'O'];
    letras.forEach(function (letra) {
        var cell = document.createElement('td');
        cell.textContent = letra;
        row1.appendChild(cell);
    });
    table.appendChild(row1);

    // Cria as outras linhas com os números
    for (var j = 0; j < 5; j++) {
        var row = document.createElement('tr');
        for (var k = 0; k < 5; k++) {
            var cell = document.createElement('td');
            if (j === 2 && k === 2) {
                cell.textContent = 'X';
            } else {
                var numero;
                switch (k) {
                    case 0:
                        numero = numerosB[j];
                        break;
                    case 1:
                        numero = numerosI[j];
                        break;
                    case 2:
                        numero = numerosN[j];
                        break;
                    case 3:
                        numero = numerosG[j];
                        break;
                    case 4:
                        numero = numerosO[j];
                        break;
                }
                cell.textContent = numero;

                // Adiciona a classe "numero" ao elemento <td> que contém o número
                cell.classList.add('numero');
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Adiciona o h4 e a tabela à section
    section.appendChild(h4);
    section.appendChild(table);

    // Adiciona a section à div "cartelas"
    var cartelasDiv = document.getElementById('cartelas');
    cartelasDiv.appendChild(section);

    // Desabilita o botão "Correr o Bingo" se não houver cartelas
    var nCartelas = 0;
    nCartelas++;
    if (nCartelas > 0) {
        document.querySelector('button[onclick="correrBingo()"]').disabled = false;
    }
}


// Arranjo com os números de 1 a 75
var numerosDisponiveis = Array.from({ length: 75 }, (_, index) => index + 1);
// Arranjo para armazenar os números sorteados
var numerosSorteados = [];

function correrBingo() {
    // Desabilita o botão "Correr o Bingo" enquanto o bingo estiver correndo
    document.querySelector('button[onclick="correrBingo()"]').disabled = true;

    // Inicia o sorteio de números
    var interval = setInterval(function () {
        // Gera um número aleatório entre 0 e o número de números disponíveis
        var randomIndex = Math.floor(Math.random() * numerosDisponiveis.length);
        var numeroSorteado = numerosDisponiveis[randomIndex];
        // Remove o número sorteado do arranjo de números disponíveis
        numerosDisponiveis.splice(randomIndex, 1);
        // Adiciona o número sorteado ao arranjo de números sorteados
        numerosSorteados.push(numeroSorteado);

        // Cria um elemento <div> para exibir o número sorteado
        var numeroDiv = document.createElement('div');
        numeroDiv.textContent = numeroSorteado;

        // Adiciona a classe "numeros" à div do número sorteado
        numeroDiv.classList.add('numeros');

        // Adiciona a div do número sorteado à section de id "numeros"
        var numerosSection = document.getElementById('numeros');
        numerosSection.appendChild(numeroDiv);

        // Verifica cada cartela após a exibição do número sorteado
        var cartelas = document.getElementsByClassName('cartelas');
        for (var i = 0; i < cartelas.length; i++) {
            var cartela = cartelas[i];
            var numerosCartela = cartela.getElementsByClassName('numero');
            var cartelaCompleta = true;

            // Verifica se o número sorteado está presente na cartela
            for (var j = 0; j < numerosCartela.length; j++) {
                var numeroCartela = numerosCartela[j];
                if (numeroCartela.textContent.trim() === numeroSorteado.toString()) {
                    // Altera o fundo para verde se o número foi marcado
                    numeroCartela.style.backgroundColor = 'green';
                }
                if (numeroCartela.style.backgroundColor !== 'green') {
                    // Ainda há números não marcados na cartela
                    cartelaCompleta = false;
                }
            }

            // Verifica se a cartela está completa após marcar o número sorteado
            if (cartelaCompleta) {
                clearInterval(interval);
                var h4 = cartela.querySelector('h4').textContent;
                setTimeout(function () {
                    alert("Bingo na cartela: " + h4);
                }, 100);
                return;
            }
        }
    }, 200); // Tempo entre cada número sorteado
}  