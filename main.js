const menuBtn = document.getElementById('carrinho-link');
const menuCart = document.getElementById('cart');

menuBtn.addEventListener('click', function(e) {
  e.preventDefault();
  menuCart.classList.toggle('open2');
});

// Captura todos os botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('#botaoAdicionar');

// Array para armazenar os itens no carrinho
const cartItems = [];

// Adiciona um listener de clique para cada botão "Adicionar ao Carrinho"
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Função para adicionar um item ao carrinho
function addToCart(event) {
  const product = event.target.parentElement;
  const productName = product.querySelector('.name').innerText;
  const productPrice = product.querySelector('.price').innerText;

  // Verifica se o item já está no carrinho
  const existingItem = cartItems.find(item => item.name === productName);

  if (existingItem) {
      // Se o item já existe, incrementa a quantidade
      existingItem.quantity++;
  } else {
      // Caso contrário, cria um novo objeto item
      const newItem = {
          name: productName,
          price: productPrice,
          quantity: 1
      };
      cartItems.push(newItem);
  }

  // Atualiza o carrinho exibindo os itens adicionados
  updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';

  // Percorre o array de itens e exibe cada item no carrinho
  cartItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.innerText = item.name + ' - ' + item.price + ' x ' + item.quantity;
      cartElement.appendChild(itemElement);
  });
}









const menuLink = document.getElementById('horizontalMenu');
const menu = document.getElementById('menu');

document.addEventListener("DOMContentLoaded", function() {
  var linkSair = document.getElementById("sair");

  linkSair.addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    var textoLink = linkSair.innerText;
    linkSair.innerText = ""; // Remove o texto do link

    var confirmacao = document.createElement("button");
    confirmacao.innerText = "Deseja mesmo sair?";

    // Estilos CSS para o botão de confirmação
    confirmacao.style.backgroundColor = "transparent";
    confirmacao.style.color = "white";
    confirmacao.style.border = "2px solid hsl(240, 70%, 65%)";
    confirmacao.style.borderRadius = "1rem";
    confirmacao.style.cursor = "pointer";
    confirmacao.style.transition = "all 400ms ease";
    confirmacao.style.marginTop = "10px";

    confirmacao.addEventListener("mouseover", function() {
      confirmacao.style.backgroundColor = "hsl(240, 70%, 65%)";
      confirmacao.style.boxShadow = "0 0 40px hsl(240, 70%, 65%)";
    });

    confirmacao.addEventListener("mouseout", function() {
      confirmacao.style.backgroundColor = "transparent";
      confirmacao.style.boxShadow = "none";
    });

    confirmacao.addEventListener("click", function() {
      window.location.href = "index.html"; // Redireciona para outra página
    });

    linkSair.parentNode.replaceChild(confirmacao, linkSair); // Substitui o link pelo botão
  });
});



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
    slide[i].style.animation = "fade 200ms ease"  
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












