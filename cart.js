(function() {
  const app = window.Gamezone;

  function atualizarContadorCarrinho() {
    const contador = document.getElementById("cart-count");

    if (contador) {
      contador.textContent = app.carrinho.length;
    }
  }

  function mostrarNotificacao(nomeJogo, removido) {
    const notificacao = document.createElement("div");
    notificacao.className = removido
      ? "notificacao-carrinho notificacao-remocao"
      : "notificacao-carrinho";
    notificacao.textContent = removido
      ? `✖ ${nomeJogo} removido do carrinho!`
      : `✓ ${nomeJogo} adicionado ao carrinho!`;
    document.body.appendChild(notificacao);

    setTimeout(function() {
      notificacao.remove();
    }, 3000);
  }

  function atualizarCarrinho() {
    atualizarContadorCarrinho();

    const lista = document.getElementById("lista-carrinho");
    const totalElemento = document.getElementById("total-carrinho");
    const totalPagamentoElemento = document.getElementById("total-pagamento");
    const btnIrPagamento = document.getElementById("btn-ir-pagamento");
    const btnLimparCarrinho = document.getElementById("btn-limpar-carrinho");
    const quantidades = new Map();
    let total = 0;

    app.carrinho.forEach(function(jogo) {
      quantidades.set(jogo.id, (quantidades.get(jogo.id) || 0) + 1);
      total += jogo.preco;
    });

    const totalFormatado = total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    if (totalElemento) {
      totalElemento.textContent = totalFormatado;
    }

    if (totalPagamentoElemento) {
      totalPagamentoElemento.textContent = totalFormatado;
    }

    if (!lista) {
      return;
    }

    const jogosExibidos = new Set();
    lista.innerHTML = "";

    app.carrinho.forEach(function(jogo, indice) {
      if (jogosExibidos.has(jogo.id)) {
        return;
      }

      jogosExibidos.add(jogo.id);
      lista.innerHTML += `
        <div class="card bg-secondary text-white mb-3">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5>${jogo.nome}</h5>
              <p class="text-warning mb-0">R$ ${jogo.preco.toFixed(2).replace(".", ",")}</p>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button class="btn btn-outline-light btn-sm" onclick="diminuirQuantidade(${jogo.id})">−</button>
              <span>${quantidades.get(jogo.id)}</span>
              <button class="btn btn-outline-light btn-sm" onclick="aumentarQuantidade(${jogo.id})">+</button>
              <button class="btn btn-danger btn-sm" onclick="removerDoCarrinho(${indice})">Remover</button>
            </div>
          </div>
        </div>
      `;
    });

    if (app.carrinho.length === 0) {
      lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }

    if (btnIrPagamento) {
      btnIrPagamento.classList.toggle("d-none", app.carrinho.length === 0);
    }

    if (btnLimparCarrinho) {
      btnLimparCarrinho.classList.toggle("d-none", app.carrinho.length === 0);
    }
  }

  window.adicionarAoCarrinho = function(id) {
    const jogo = app.jogos.find(item => item.id === id);

    if (!jogo) {
      return;
    }

    app.carrinho.push(jogo);
    app.salvarCarrinho();
    atualizarCarrinho();
    mostrarNotificacao(jogo.nome, false);
  };

  window.removerDoCarrinho = function(indice) {
    const jogoRemovido = app.carrinho[indice];

    if (!jogoRemovido) {
      return;
    }

    app.carrinho = app.carrinho.filter(jogo => jogo.id !== jogoRemovido.id);
    app.salvarCarrinho();
    atualizarCarrinho();
    mostrarNotificacao(jogoRemovido.nome, true);
  };

  window.limparCarrinho = function() {
    app.carrinho = [];
    app.salvarCarrinho();
    atualizarCarrinho();
  };

  window.aumentarQuantidade = function(id) {
    const jogo = app.jogos.find(item => item.id === id);

    if (jogo) {
      app.carrinho.push(jogo);
      app.salvarCarrinho();
      atualizarCarrinho();
    }
  };

  window.diminuirQuantidade = function(id) {
    const indice = app.carrinho.findIndex(jogo => jogo.id === id);

    if (indice !== -1) {
      app.carrinho.splice(indice, 1);
      app.salvarCarrinho();
      atualizarCarrinho();
    }
  };

  app.atualizarCarrinho = atualizarCarrinho;
  app.initCart = atualizarCarrinho;
})();
