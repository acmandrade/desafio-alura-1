function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Confirmação antes de devolver o jogo
        let confirmar = confirm("Tem certeza de que deseja devolver este jogo?");
        if (!confirmar) return; // Se o usuário cancelar, nada acontece

        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = "Alugar";
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
    }

    contarJogosAlugados(); // Atualiza a contagem sempre que um jogo muda de status
}

function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
