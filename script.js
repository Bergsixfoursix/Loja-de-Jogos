/* Cadastrando os 6 jogos e dois arrays, jogo e carrinho */
const jogos = [
  { id: 1, nome: "GTA VI", preco: 449.90 },
  { id: 2, nome: "Zelda: Ocarina of Time", preco: 329.90 },
  { id: 3, nome: "Call of Duty: Modern Warfare 4", preco: 349.90 },
  { id: 4, nome: "EA Sports UFC 6", preco: 349.90 },
  { id: 5, nome: "EA SPORTS FC 27", preco: 349.90 },
  { id: 6, nome: "Phantom Blade Zero", preco: 199.90 }
];

let carrinho = [];
/* função para adicionar o jogo no carrinho pela ID */
function adicionarAoCarrinho(id) {

  const jogo = jogos.find(jogo => jogo.id === id);

  if (jogo) {
    carrinho.push(jogo);
    atualizarCarrinho();
  }

}
 /* Aqui irá atualizar o carrinho e calcular o total, além de atualizar o contador do carrinho */
function atualizarCarrinho() {

  const lista = document.getElementById("lista-carrinho");
  const totalElemento = document.getElementById("total-carrinho");
  const contador = document.getElementById("cart-count");

  lista.innerHTML = "";

  let total = 0;

  carrinho.forEach((jogo, indice) => {

    total += jogo.preco;

    lista.innerHTML += `
      <div class="card bg-secondary text-white mb-3">
        <div class="card-body d-flex justify-content-between align-items-center">

          <div>
            <h5>${jogo.nome}</h5>
            <p class="text-warning mb-0">
              R$ ${jogo.preco.toFixed(2).replace(".", ",")}
            </p>
          </div>

          <button
            class="btn btn-danger"
            onclick="removerDoCarrinho(${indice})"
          >
            Remover
          </button>

        </div>
      </div>
    `;

  });

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
  }

  totalElemento.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  contador.textContent = carrinho.length;
}
/*Função para remover o jogo*/
function removerDoCarrinho(indice) {

  carrinho.splice(indice, 1);

  atualizarCarrinho();

}

/* Pesquisa de jogos */
const pesquisa = document.getElementById("pesquisa-jogos");
const cardsJogos = document.querySelectorAll(".jogo");

pesquisa.addEventListener("input", function() {
  const texto = pesquisa.value.toLowerCase();
  let encontrados = 0;

  cardsJogos.forEach(function(card) {
    const nomeJogo = card.querySelector(".card-title").textContent.toLowerCase();

    if (nomeJogo.includes(texto)) {
      card.style.display = "";
      encontrados++;
    } else {
      card.style.display = "none";
    }
  });

const mensagem = document.getElementById("sem-resultados");

if (encontrados === 0) {
  mensagem.classList.remove("d-none");
} else {
  mensagem.classList.add("d-none");
}
});

/* Atualize sua função atualizarCarrinho() existente com estas linhas extras: */
function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalElemento = document.getElementById("total-carrinho");
  const totalPagamentoElemento = document.getElementById("total-pagamento"); // Novo
  const contador = document.getElementById("cart-count");
  const btnIrPagamento = document.getElementById("btn-ir-pagamento"); // Novo

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((jogo, indice) => {
    total += jogo.preco;
    lista.innerHTML += `
      <div class="card bg-secondary text-white mb-3">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5>${jogo.nome}</h5>
            <p class="text-warning mb-0">
              R$ ${jogo.preco.toFixed(2).replace(".", ",")}
            </p>
          </div>
          <button class="btn btn-danger" onclick="removerDoCarrinho(${indice})">
            Remover
          </button>
        </div>
      </div>
    `;
  });

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    btnIrPagamento.classList.add("d-none"); // Esconde o botão se esvaziar
    document.getElementById("pedido").classList.add("d-none"); // Esconde o formulário
  } else {
    btnIrPagamento.classList.remove("d-none"); // Mostra o botão se houver itens
  }

  const totalFormatado = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  totalElemento.textContent = totalFormatado;
  if (totalPagamentoElemento) {
    totalPagamentoElemento.textContent = totalFormatado;
  }
  contador.textContent = carrinho.length;
}

/* --- NOVAS FUNÇÕES PARA O PAGAMENTO --- */

// Exibe a seção de pagamento e rola a tela até ela
function mostrarFormularioPagamento() {
  const secaoPedido = document.getElementById("pedido");
  secaoPedido.classList.remove("d-none");
  secaoPedido.scrollIntoView({ behavior: "smooth" });
}

// Oculta o formulário caso o usuário desista de finalizar agora
function cancelarPagamento() {
  document.getElementById("pedido").classList.add("d-none");
}

// Alterna os campos exibidos conforme a escolha (Cartão, PIX ou Boleto)
function alternarCamposPagamento() {
  const metodo = document.getElementById("metodo-pagamento").value;
  const dadosCartao = document.getElementById("dados-cartao");
  const dadosPix = document.getElementById("dados-pix");
  const dadosBoleto = document.getElementById("dados-boleto");

  // Esconde todos primeiro
  dadosCartao.classList.add("d-none");
  dadosPix.classList.add("d-none");
  dadosBoleto.classList.add("d-none");

  // Exibe apenas o selecionado
  if (metodo === "cartao") {
    dadosCartao.classList.remove("d-none");
  } else if (metodo === "pix") {
    dadosPix.classList.remove("d-none");
  } else if (metodo === "boleto") {
    dadosBoleto.classList.remove("d-none");
  }
}

// Processa o envio do formulário
document.getElementById("form-pagamento").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o recarregamento da página

  const nome = document.getElementById("nome-cliente").value;
  const email = document.getElementById("email-cliente").value;
  const metodo = document.getElementById("metodo-pagamento").options[document.getElementById("metodo-pagamento").selectedIndex].text;

  alert(`Obrigado pela compra, ${nome}!\n\nPedido confirmado via ${metodo}.\nAs chaves de ativação dos seus ${carrinho.length} jogo(s) foram enviadas para: ${email}`);

  // Limpa o carrinho, reseta o formulário e esconde a seção de pedido
  carrinho = [];
  atualizarCarrinho();
  this.reset();
  alternarCamposPagamento();
  cancelarPagamento();
});
