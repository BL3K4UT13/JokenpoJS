let valorEscolhido = 0;

function gerarValorAleatorio(){
    return Math.floor(Math.random() * 3) + 1;
}

 function configurarJogo(){
    const conteudo = document.getElementById('conteudo');

    conteudo.innerHTML = '';

    // Cria uma nova mensagem
    const novaMensagem = document.createElement('p');
    novaMensagem.textContent = 'Escolha sua próxima ação:';
    novaMensagem.style.marginTop = '20px';

    // Cria o primeiro novo botão
    const botaoPedra = document.createElement('button');
    botaoPedra.textContent = 'Pedra';
    botaoPedra.className = 'botao';

    // Cria o segundo novo botão
    const botaoPapel = document.createElement('button');
    botaoPapel.textContent = 'Papel';
    botaoPapel.className = 'botao';

    // Cria o segundo novo botão
    const botaoTesoura = document.createElement('button');
    botaoTesoura.textContent = 'Tesoura';
    botaoTesoura.className = 'botao';

    // Adiciona a mensagem e os botões ao contêiner
    conteudo.appendChild(novaMensagem);
    conteudo.appendChild(botaoPedra);
    conteudo.appendChild(botaoPapel);
    conteudo.appendChild(botaoTesoura);

    botaoPedra.addEventListener('click', () =>{
        valorEscolhido = 1
        verificarResultado()
    });
    
    botaoPapel.addEventListener('click', () =>{
        valorEscolhido = 2
        verificarResultado()
    });

    botaoTesoura.addEventListener('click', () =>{
        valorEscolhido = 3
        verificarResultado()
    });

 }

    //1 - Pedra
    //2 - Papel
    //3 - Tesoura

function converteValor (num){
    switch(num){
        case 1:
            return "Pedra";

        case 2:
            return "Papel";

        case 3:
            return "Tesoura";

    }
}

 function verificarResultado() {
    let valorAleatorio = gerarValorAleatorio(); // Gera o valor aleatório
    let nomeValorEscolhido = converteValor(valorEscolhido);
    let nomeValorAleatorio = converteValor(valorAleatorio);


    let chave = `${valorEscolhido}-${valorAleatorio}`;

    switch(chave){
        case '1-1':
        case '2-2':
        case '3-3':
            alert(`Empate!!! Você selecionou ${nomeValorEscolhido} e eu escolhi ${nomeValorAleatorio}`);
            break;

        case '1-2':
        case '2-3':
        case '3-1':
            alert(`Eu ganhei!!! Você selecionou ${nomeValorEscolhido} e eu escolhi ${nomeValorAleatorio}`);
            break;

        case '2-1':
        case '3-2':
        case '1-3':
            alert(`Você ganhou!!! Você selecionou ${nomeValorEscolhido} e eu escolhi ${nomeValorAleatorio}`);
            break;
            
    }

    configurarJogo();

 }

const botaoJogar = document.getElementById('botao-jogar');
botaoJogar.addEventListener('click',() =>{
    configurarJogo();
    botaoJogar.remove();
});

