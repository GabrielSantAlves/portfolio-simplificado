/* Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele 
*/

//Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

const BotaoMostrarProjeto = document.querySelector( '.btn-mostrar-projetos'); 
const ProjetosInativos = document.querySelectorAll( '.projeto:not(.ativo)');


BotaoMostrarProjeto.addEventListener('click', () => {
    
    MostrarMaisProjetos();
    EsconderBotao();
});

function EsconderBotao() {
    BotaoMostrarProjeto.classList.add("remover");
}

function MostrarMaisProjetos() {
    ProjetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
