/*Função de finalizar compra

  -aparecer o popup;
  -aparecer os itens que voce escolheu;

*/

// Função para exibir o total dos itens do carrinho e abrir o pop-up
function showTotal() {
  // Calcula o total
  const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);

  // Atualiza o conteúdo do pop-up com os detalhes do pedido
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerText = item.name + ' - ' + item.price + ' x ' + item.quantity;
    cartItemsElement.appendChild(itemElement);
  });

  // Exibe o total
  const totalElement = document.createElement('div');
  totalElement.innerText = 'Total: R$ ' + total.toFixed(2);
  cartItemsElement.appendChild(totalElement);

  // Exibe o pop-up e o overlay
  const popupOverlay = document.getElementById('popup-overlay');
  const popup = document.getElementById('popup');
  popupOverlay.style.display = 'block';
  popup.style.display = 'block';

  // Adiciona um evento de clique ao botão "Confirmar" do pop-up
  const confirmButton = document.getElementById('confirm-button');
  confirmButton.addEventListener('click', validateAndProcessOrder);

  // Função para validar e processar o pedido
  function validateAndProcessOrder() {
    const paymentInput = document.getElementById('payment');
    const addressInput = document.getElementById('address');
    const payment = paymentInput.value.trim();
    const address = addressInput.value.trim();

    // Validação da forma de pagamento e endereço
    if (!payment) {
      alert('Por favor, selecione uma forma de pagamento.');
      return;
    }

    if (!address || !validateAddress(address)) {
      alert('Por favor, insira um endereço válido.');
      return;
    }

    // Processamento do pedido
    processOrder();
  }

  // Função para validar o endereço
  function validateAddress(address) {
    // Lógica para validar o endereço (pode ser substituída pela lógica adequada)
    return address.length >= 5;
  }

  // Função para processar o pedido e exibir mensagem de agradecimento
  function processOrder() {
    // Lógica para processar o pedido (pode ser substituída pela lógica adequada)

    // Exibe mensagem de agradecimento
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = '<h2>Obrigada pela compra!</h2>';

    // Fecha o pop-up e o overlay após 5 segundos
    setTimeout(() => {
      popupOverlay.style.display = 'none';
      popup.style.display = 'none';
    }, 4000);
  }
}




/*Funções de carrinho

  -adicionar itens;
  -atualizar display;

*/

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

// Função para atualizar o carrinho e exibir o total
function updateCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';
  
  // Cria o botão "Confirmar Compra"
  const confirmButton = document.createElement('button');
  confirmButton.innerText = 'Confirmar Compra';

  // Adiciona um evento de clique ao botão
  confirmButton.addEventListener('click', showTotal);

  cartElement.appendChild(confirmButton);

  // Percorre o array de itens e exibe cada item no carrinho
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerText = item.name + ' - ' + item.price + ' x ' + item.quantity;
    cartElement.appendChild(itemElement);
  });
}




/*Slider

  -mostrar slide;
  -passar slides;

*/

let slideIndex = 1;
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




/* Funções de abrir tela

  -menus;
  -telas de produtos;

*/

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

const menuBtn = document.getElementById('carrinho-link');
const menuCart = document.getElementById('cart');

menuBtn.addEventListener('click', function(e) {
  e.preventDefault();
  menuCart.classList.toggle('open2');
});

function Abrir(tela){
  document.getElementById(tela).style.scale = "1";
}

function Fechar(tela){
  document.getElementById(tela).style.scale = "0";
}




/* verificações

  -email;
  -senhas;

*/

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

  const senha1 = senhaInput1.value;
  const senha2 = senhaInput2.value;

  if (senha1 === senha2) {
    senhaInput2.style.color = 'hsl(125 100% 40%)';
    senhaInput2.style.outlineColor = 'hsl(125 100% 40%)';
  } else {
    senhaInput2.style.color = 'hsl(0 100% 40%)';
    senhaInput2.style.outlineColor = 'hsl(0 100% 40%)';
  }
}












