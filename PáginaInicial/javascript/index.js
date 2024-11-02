document.addEventListener('DOMContentLoaded', () => {
    const telaPrincipal = document.querySelector('.telaPrincipal');
    const tremorLink = document.querySelector('#tremorLink');
    const mensagemLink = document.querySelector('#mensagemLink'); 
    const imagemLink = document.querySelector('#imagemLink');
    const mensagemDiv = document.querySelector('#mensagem');
    const imagemElement = document.querySelector('#imagem');
    const foguete = document.querySelector('.foguete');
    const ativarFoguete = document.getElementById('ativarFoguete');

    const mensagens = [
        "A mensagem do universo é: Se tudo está indo mal, desista antes de ficar pior",
        "Se você estiver tendo um dia ruim hoje, pense: quando que já foi bom?",
        "A vida é uma jornada, aproveite seu fracasso!",
        "Você é uma inspiração para todos, pois você começou no barro e ainda continua lá.",
        "As pessoas costumam ficar mais inteligentes com o tempo. Uma pena que não te avisaram isso",
        "Um homem não vai te bater duas vezes, se você bater nele na primeira.",
        "Você quer me fazer perguntas... com essa roupa? 🤨",
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

    function esconderTodos() {
        foguete.classList.remove('animate'); 
        foguete.style.display = 'none';
        mensagemDiv.style.display = 'none';
        imagemElement.style.display = 'none';
    }

    ativarFoguete.addEventListener('click', () => {
        esconderTodos();
        foguete.style.display = 'block';
        foguete.classList.add('animate'); 
    });

    mensagemLink.addEventListener('click', () => {
        esconderTodos(); 
        mensagemDiv.textContent = mensagens[indiceMensagem]; 
        mensagemDiv.style.display = 'block';
        indiceMensagem = (indiceMensagem + 1) % mensagens.length; 
    });

    imagemLink.addEventListener('click', () => {
        esconderTodos();
        imagemElement.src = imagens[indiceImagem]; 
        imagemElement.style.display = 'block'; 
        indiceImagem = (indiceImagem + 1) % imagens.length;

        imagemElement.classList.add('rodar');
        imagemElement.addEventListener('animationend', () => {
            imagemElement.classList.remove('rodar');
        }, { once: true });
    });

    tremorLink.addEventListener('click', () => {
        telaPrincipal.classList.toggle('tremor');
    });
});




