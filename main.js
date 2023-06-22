const menuLink = document.getElementById('horizontalMenu');
const menu = document.getElementById('menu');

let slideIndex = 1
showSlides(slideIndex);

function plusSlide(n){
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slide = document.getElementsByClassName("mySlide");
  if (n > slide.length){
    slideIndex = 1;
  }    
  if (n < 1){
    slideIndex = slide.length
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slide[slideIndex-1].style.display = "block";  
}


function Fechar(tela){
  document.getElementById(tela).style.scale = "0";
}

function Abrir(tela){
  let telaProduto = document.getElementById(tela);
  telaProduto.style.scale = "1";
}

menuLink.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.toggle('open');
});


const anchor = document.getElementById('anchor');
const menu2 = document.getElementById('menu2');

anchor.addEventListener('click', function(e) {
  e.preventDefault();
  menu2.classList.toggle('open2');
});

//verificações

const emailInput = document.getElementById('email');

emailInput.addEventListener('input', () =>{
  let email = emailInput.value;

  if (isValidEmail(email)) {
    emailInput.style.outlineColor = 'hsl(125 100% 40%)'; // E-mail válido, altera a cor do texto para verde
    emailInput.style.color = 'hsl(125 100% 40%)';
  } else {
    emailInput.style.outlineColor = 'hsl(0 100% 50%)'; // E-mail válido, altera a cor do texto para verde
    emailInput.style.color = 'hsl(0 100% 50%)';  }
});

function isValidEmail(email) {
  // Expressão regular para validar um endereço de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidEmail(verfificacaoEmail) {
  // Expressão regular para validar um endereço de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(verfificacaoEmail);
}

function verificarSenha() {
  const senhaInput = document.getElementById("senhaInput");
  const senha = senhaInput.value;

  if (senha.length < 8) {
    senhaInput.style.color = 'hsl(0 100% 50%)';
    senhaInput.style.outlineColor = 'hsl(0 100% 50%)'; // Senha inválida, altera a cor do texto para vermelho
  } else {
    senhaInput.style.color = 'hsl(125 100% 40%)';
    senhaInput.style.outlineColor = 'hsl(125 100% 40%)'; // Senha válida, altera a cor do texto para verde
  }
}
function compararSenhas(){
  const senhaInput1 = document.getElementById("senhaInput");
  const senhaInput2 = document.getElementById("senhaInput2");

  const senha1 = senhaInput.value;
  const senha2 = senhaInput2.value;

  if (senha1 === senha2) {
    senhaInput2.style.color = 'hsl(125 100% 40%)';
    senhaInput2.style.outlineColor = 'hsl(125 100% 40%)';
  } else {
    senhaInput2.style.color = 'hsl(0 100% 40%)';
    senhaInput2.style.outlineColor = 'hsl(0 100% 40%)';
  }
}

const BuyButton = document.getElementById("buyBtn");
const BotaoFechar = document.querySelector(".fecharTela")
const Screen = document.querySelector(".buy-box-screen")

function showScreen(telaCaixa){
  let telaAberta = document.querySelector(telaCaixa)
  telaAberta.style.scale = "1";
  telaAberta.style.pointerEvents = "all";
}

function FecharTela(telaCaixa){
  let telaAberta = document.querySelector(telaCaixa)
  telaAberta.style.scale = "0";
  telaAberta.style.pointerEvents = "none";
}














