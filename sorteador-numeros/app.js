function sortear() { 

    let quantidade = parseInt(document.getElementById('quantidade').value); 
    let de = parseInt(document.getElementById('de').value); 
    let ate = parseInt(document.getElementById('ate').value); 

    let sorteados = [];
    let numero; 

    // Verifica se o intervalo é válido
    if (de >= ate) {
        alert("O número inicial deve ser menor que o número final.");
        return;
    }

    // Calcula o total de números disponíveis no intervalo
    let totalNumerosDisponiveis = (ate - de) + 1;

    // Verifica se a quantidade solicitada é maior do que os números disponíveis
    if (quantidade > totalNumerosDisponiveis) {
        alert(`Você escolheu mais números (${quantidade}) do que o intervalo permite (${totalNumerosDisponiveis}). Reduza a quantidade.`);
        return;
    }

    // Sorteia os números sem repetição
    for (let i = 0; i < quantidade; i++) {
        numero = getRandomInt(de, ate);
        while(sorteados.includes(numero)){
            numero = getRandomInt(de, ate); 
        }
        sorteados.push(numero); 
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')} </label>`;
    alterarStatusBotao(); 
}

// Função para obter um número aleatório dentro do intervalo, incluindo o número máximo
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() { 
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else { 
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() { 
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao(); 
}
