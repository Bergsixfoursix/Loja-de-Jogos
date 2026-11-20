/* Cadastrando os 6 jogos e dois arrays, jogo e carrinho */
const jogos = [
  { id: 1, nome: "GTA VI", preco: 449.90 },
  { id: 2, nome: "Zelda: Ocarina of Time", preco: 329.90 },
  { id: 3, nome: "Call of Duty: Modern Warfare 4", preco: 349.90 },
  { id: 4, nome: "EA Sports UFC 6", preco: 349.90 },
  { id: 5, nome: "EA SPORTS FC 27", preco: 349.90 },
  { id: 6, nome: "Phantom Blade Zero", preco: 199.90 },
  { id: 7, nome: "Red Dead Redemption 2", preco: 249.90 },
  { id: 8, nome: "Elden Ring", preco: 280.90 }
];
// função para mostrar secao
function mostrarSecao(idSecao) {
  const secoes = ["loja", "biblioteca", "carrinho", "pedido", "conta"];

  secoes.forEach(function(id) {
    const secao = document.getElementById(id);

    if (secao) {
      secao.classList.add("d-none");
    }
  });

  const secaoSelecionada = document.getElementById(idSecao);

  if (secaoSelecionada) {
    secaoSelecionada.classList.remove("d-none");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}


let carrinho = [];
/* função para adicionar o jogo no carrinho pela ID */
function adicionarAoCarrinho(id) {

  const jogo = jogos.find(jogo => jogo.id === id);

  if (jogo) {
    carrinho.push(jogo);
    atualizarCarrinho();
    mostrarNotificacao(jogo.nome);
  }
}

  /* Notificação de produto adicionado */
function mostrarNotificacao(nomeJogo) {
  const notificacao = document.createElement("div");

  notificacao.className = "notificacao-carrinho";
  notificacao.textContent = `✓ ${nomeJogo} adicionado ao carrinho!`;

  document.body.appendChild(notificacao);

  setTimeout(function() {
    notificacao.remove();
  }, 3000);
}

/* Notificação de jogo removido */
function mostrarNotificacaoRemocao(nomeJogo) {
    const notificacao = document.createElement("div");

    notificacao.className = "notificacao-carrinho notificacao-remocao";

    notificacao.textContent = `✖ ${nomeJogo} removido do carrinho!`;

    document.body.appendChild(notificacao);

    setTimeout(function() {
        notificacao.remove();
    }, 3000);
}

 
/*Função para remover o jogo*/
function removerDoCarrinho(indice) {

  const jogoRemovido = carrinho[indice];

  carrinho = carrinho.filter(jogo => jogo.id !== jogoRemovido.id);

  atualizarCarrinho();

  mostrarNotificacaoRemocao(jogoRemovido.nome);

}

/* Função para limpar todo o carrinho */
function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

/*Função para mostrar a biblioteca*/
function mostrarBiblioteca() {
  const loja = document.getElementById("loja");
  const biblioteca = document.getElementById("biblioteca");

  loja.classList.add("d-none");
  biblioteca.classList.remove("d-none");
  }

/*Função para mostrar a loja*/
function mostrarLoja() {
  const loja = document.getElementById("loja");
  const biblioteca = document.getElementById("biblioteca");

  biblioteca.classList.add("d-none");
  loja.classList.remove("d-none");
}


/* Pesquisa de jogos */
const pesquisa = document.getElementById("pesquisa-jogos");
const cardsJogos = document.querySelectorAll(".jogo");
const biblioteca = document.getElementById("biblioteca");
const loja = document.getElementById("loja");
const resultadosBiblioteca = document.getElementById("resultados-biblioteca");

pesquisa.addEventListener("input", function() {
  const texto = pesquisa.value.toLowerCase();
  let encontrados = 0;

  resultadosBiblioteca.innerHTML = "";
resultadosBiblioteca.classList.add("d-none");

const nomesEncontrados = new Set();

cardsJogos.forEach(function(card) {
  const nomeJogo = card.querySelector(".card-title").textContent.trim().toLowerCase();
  const corresponde = nomeJogo.includes(texto);
  const estaNaLoja = loja.contains(card);

  if (estaNaLoja) {
    card.style.display = corresponde ? "" : "none";
  } else {
    card.style.display = "";
  }

  if (corresponde && !nomesEncontrados.has(nomeJogo)) {
    nomesEncontrados.add(nomeJogo);
    encontrados++;

    if (!estaNaLoja && texto !== "") {
      const copia = card.cloneNode(true);
      resultadosBiblioteca.appendChild(copia);
      resultadosBiblioteca.classList.remove("d-none");
    }
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
  const btnLimparCarrinho = document.getElementById("btn-limpar-carrinho");

  lista.innerHTML = "";
  let total = 0;

  const quantidades = {};

carrinho.forEach(function(jogo) {
  if (quantidades[jogo.id]) {
    quantidades[jogo.id]++;
  } else {
    quantidades[jogo.id] = 1;
  }
});

  const jogosExibidos = new Set();

carrinho.forEach((jogo, indice) => {
  total += jogo.preco;

  if (jogosExibidos.has(jogo.id)) {
    return;
  }

  jogosExibidos.add(jogo.id);

  lista.innerHTML += `
      <div class="card bg-secondary text-white mb-3">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5>${jogo.nome}</h5>
            <p class="text-warning mb-0">
              R$ ${jogo.preco.toFixed(2).replace(".", ",")}
            </p>
          </div>
          <div class="d-flex align-items-center gap-2">

  <button class="btn btn-outline-light btn-sm"
    onclick="diminuirQuantidade(${jogo.id})">−</button>

  <span>${quantidades[jogo.id]}</span>

  <button class="btn btn-outline-light btn-sm"
    onclick="aumentarQuantidade(${jogo.id})">+</button>

  <button class="btn btn-danger btn-sm"
    onclick="removerDoCarrinho(${indice})">Remover</button>
</div>
        </div>
      </div>
    `;
  });

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    btnIrPagamento.classList.add("d-none"); // Esconde o botão se esvaziar
    document.getElementById("pedido").classList.add("d-none"); // Esconde o formulário
    document.getElementById("carrinho").classList.remove("d-none");
    btnLimparCarrinho.classList.add("d-none");
  } else {
    btnIrPagamento.classList.remove("d-none"); // Mostra o botão se houver itens
    btnLimparCarrinho.classList.remove("d-none");
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

function aumentarQuantidade(id) {
  const jogo = jogos.find(jogo => jogo.id === id);

  if (jogo) {
    carrinho.push(jogo);
    atualizarCarrinho();
  }
}

function diminuirQuantidade(id) {
  const indice = carrinho.findIndex(jogo => jogo.id === id);

  if (indice !== -1) {
    carrinho.splice(indice, 1);
    atualizarCarrinho();
  }
}

/* --- NOVAS FUNÇÕES PARA O PAGAMENTO --- */

// Exibe a seção de pagamento e rola a tela até ela

/* Função para mostrar o resumo do pedido */
function atualizarResumoPedido() {
  const resumo = document.getElementById("resumo-pedido");
  resumo.innerHTML = "";

  const quantidades = {};

  carrinho.forEach(function(jogo) {
    if (quantidades[jogo.id]) {
      quantidades[jogo.id]++;
    } else {
      quantidades[jogo.id] = 1;
    }
  });

  const jogosExibidos = new Set();

  carrinho.forEach(function(jogo) {
    if (jogosExibidos.has(jogo.id)) {
      return;
    }

    jogosExibidos.add(jogo.id);

    const quantidade = quantidades[jogo.id];
    const subtotal = jogo.preco * quantidade;

    resumo.innerHTML += `
      <div class="d-flex justify-content-between mb-2">
        <span>${jogo.nome} (${quantidade}x)</span>
        <span>R$ ${subtotal.toFixed(2).replace(".", ",")}</span>
      </div>
    `;
  });
}

function mostrarFormularioPagamento() {
  if (carrinho.length === 0) {
    alert("Adicione um jogo ao carrinho primeiro!");
    mostrarSecao("carrinho");
    return;
  }
  
  atualizarResumoPedido();
  mostrarSecao("pedido");
}

function abrirPedido() {
  mostrarFormularioPagamento();
}

function cancelarPagamento() {
  mostrarSecao("carrinho");
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


// Alterna entre login e cadastro
function mostrarCadastro() {
  document.getElementById("area-login").classList.add("d-none");
  document.getElementById("area-cadastro").classList.remove("d-none");
}

function mostrarLogin() {
  document.getElementById("area-cadastro").classList.add("d-none");
  document.getElementById("area-login").classList.remove("d-none");
}

// Cadastro demonstrativo
document.getElementById("form-cadastro").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("cadastro-nome").value.trim();
  const email = document.getElementById("cadastro-email").value.trim();
  const senha = document.getElementById("cadastro-senha").value;

  // Apenas dados públicos são armazenados.
  // A senha NÃO é salva no navegador.
  const usuario = { nome, email };

  localStorage.setItem("usuarioGamezone", JSON.stringify(usuario));

  alert("Perfil demonstrativo criado!");
  this.reset();
  abrirPerfil();
});

// Login demonstrativo (sem autenticação real)
document.getElementById("form-login").addEventListener("submit", function(event) {
  event.preventDefault();

  const usuario = JSON.parse(localStorage.getItem("usuarioGamezone") || "null");

  if (!usuario) {
    alert("Crie um perfil primeiro.");
    return;
  }

  const email = document.getElementById("login-email").value.trim();

  if (email.toLowerCase() !== usuario.email.toLowerCase()) {
    alert("E-mail não encontrado.");
    return;
  }

  // Não verifica senha: demonstração de interface.
  sessionStorage.setItem("sessaoGamezone", "ativa");
  this.reset();
  abrirPerfil();
});

// Mostra o perfil
function abrirPerfil() {
  const usuario = JSON.parse(localStorage.getItem("usuarioGamezone") || "null");

  if (!usuario) return;

  document.getElementById("area-login").classList.add("d-none");
  document.getElementById("area-cadastro").classList.add("d-none");
  document.getElementById("area-perfil").classList.remove("d-none");

  document.getElementById("perfil-nome").textContent = usuario.nome;
  document.getElementById("perfil-email").textContent = usuario.email;
}

// Sair da conta
function sairConta() {
  sessionStorage.removeItem("sessaoGamezone");

  document.getElementById("area-perfil").classList.add("d-none");
  document.getElementById("area-login").classList.remove("d-none");
}

// Recupera a sessão demonstrativa ao atualizar
if (sessionStorage.getItem("sessaoGamezone") === "ativa") {
  abrirPerfil();
}
// função para mostrar a conta
function mostrarConta() {
  const secoes = ["loja", "biblioteca", "carrinho", "pedido"];

  secoes.forEach(function(id) {
    document.getElementById(id).classList.add("d-none");
  });

  document.getElementById("conta").classList.remove("d-none");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

