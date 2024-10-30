document.addEventListener('DOMContentLoaded', () => {
    const telaPrincipal = document.querySelector('.telaPrincipal');
    const tremorLink = document.querySelector('#tremorLink');
    const mensagemLink = document.querySelector('#mensagemLink'); 
    const imagemLink = document.querySelector('#imagemLink');
    const mensagemDiv = document.querySelector('#mensagem');
    const imagemElement = document.querySelector('#imagem');

    const mensagens = [
        "A mensagem do universo é: Se tudo está indo mal, desista antes de ficar pior",
        "Se você estiver tendo um dia ruim hoje, pense: quando que já foi bom?",
        "A vida é uma jornada, aproveite seu fracasso!",
        "Você é uma inspiração para todos, pois você começou no barro e ainda continua lá.",
        "As pessoas costumam ficar mais inteligentes com o tempo. Uma pena que não te avisaram isso",
        "Um homem não vai te bater duas vezes, se você bater nele na primeira.",
        "Você quer me fazer perguntas... Com essa roupa? 🤨",
        "As pessoas ficam tomadas por uma emoção quando você não está perto. Ela se chama... felicidade.",
        "Você tem uma excelente determinação, meu jovem. Uma pena que você só se resuma a isso."
    ];

    const imagens = [
        '../image/chaquinha.jpeg', 
        '../image/god.jpeg',
        '../image/ju1.jpeg',
        '../image/picasonica.jpeg'
    ];

    let indiceMensagem = 0; 
    let indiceImagem = 0;

    // Adiciona a animação de tremor
    tremorLink.addEventListener('click', () => {
        telaPrincipal.classList.toggle('tremor');
    });

    // Adiciona a mensagem do universo
    mensagemLink.addEventListener('click', () => {
        mensagemDiv.textContent = mensagens[indiceMensagem]; 
        indiceMensagem = (indiceMensagem + 1) % mensagens.length; 
    });

    // Mostra uma imagem em sequência com animação
    imagemLink.addEventListener('click', () => {
        imagemElement.src = imagens[indiceImagem]; // Seleciona a próxima imagem
        indiceImagem = (indiceImagem + 1) % imagens.length; // Avança para a próxima imagem

        imagemElement.style.display = 'block'; // Torna a imagem visível

        // Adiciona a classe de animação e remove após a animação ser concluída
        imagemElement.classList.add('rodar');
        imagemElement.addEventListener('animationend', () => {
            imagemElement.classList.remove('rodar');
        }, { once: true });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const imagemElement = document.querySelector('.imagem');
    const botaoAnimacao = document.querySelector('#animar');

    botaoAnimacao.addEventListener('click', () => {
        imagemElement.classList.add('rodar');
    });

    // Define a posição final quando a animação termina
    imagemElement.addEventListener('animationend', () => {
        imagemElement.style.marginLeft = '0'; // Define o margin-left como 0 após a animação
        imagemElement.classList.remove('rodar'); // Remove a classe para reiniciar a animação se clicado novamente
    });
});


