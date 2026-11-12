/* Cadastrando os 6 jogos e dois arrays, jogo e carrinho */
const jogos = [
  { id: 1, nome: "GTA VI", preco: 449.90 },
  { id: 2, nome: "Zelda: Ocarina of Time", preco: 329.90 },
  { id: 3, nome: "Call of Duty: Modern Warfare 4", preco: 349.90 },
  { id: 4, nome: "EA Sports UFC 6", preco: 349.90 },
  { id: 5, nome: "EA SPORTS FC 27", preco: 349.90 },
  { id: 6, nome: "Phantom Blade Zero", preco: 229.90 }
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
