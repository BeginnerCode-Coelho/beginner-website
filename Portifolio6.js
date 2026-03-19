function magiaBotao(botao) {
  alert(`Você clicou no botão: ${botao.innerText} ✨`);

}

let botoes = document.querySelectorAll('.btns button, .menu ul li a');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    magiaBotao(botao);
  });
})
