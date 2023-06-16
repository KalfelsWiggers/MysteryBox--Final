const menuLink = document.getElementById('horizontalMenu');
const menu = document.getElementById('menu');

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

emailInput.addEventListener('input', () => {
  const email = emailInput.value;

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

const verificarEmail = document.getElementById("email2")

verificarEmail.addEventListener('input', () => {
  const verfificacaoEmail = verificarEmail.value;

  if (isValidEmail(verfificacaoEmail)) {
    verificarEmail.style.outlineColor = 'hsl(125 100% 40%)'; // E-mail válido, altera a cor do texto para verde
    verificarEmail.style.color = 'hsl(125 100% 40%)';
  } else {
    verificarEmail.style.outlineColor = 'hsl(0 100% 50%)'; // E-mail válido, altera a cor do texto para verde
    verificarEmail.style.color = 'hsl(0 100% 50%)';  }
});

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















