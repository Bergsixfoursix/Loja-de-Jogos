(function() {
  const app = window.Gamezone;

  function atualizarResumoPedido() {
    const resumo = document.getElementById("resumo-pedido");

    if (!resumo) {
      return;
    }

    resumo.innerHTML = "";
    const quantidades = new Map();
    const jogosExibidos = new Set();

    app.carrinho.forEach(function(jogo) {
      quantidades.set(jogo.id, (quantidades.get(jogo.id) || 0) + 1);
    });

    app.carrinho.forEach(function(jogo) {
      if (jogosExibidos.has(jogo.id)) {
        return;
      }

      jogosExibidos.add(jogo.id);
      const quantidade = quantidades.get(jogo.id);
      const subtotal = jogo.preco * quantidade;

      resumo.innerHTML += `
        <div class="d-flex justify-content-between mb-2">
          <span>${jogo.nome} (${quantidade}x)</span>
          <span>R$ ${subtotal.toFixed(2).replace(".", ",")}</span>
        </div>
      `;
    });

    if (app.carrinho.length === 0) {
      resumo.innerHTML = "<p>Seu carrinho está vazio.</p>";
    }
  }

  function alternarCamposPagamento() {
    const metodoPagamento = document.getElementById("metodo-pagamento");
    const dadosCartao = document.getElementById("dados-cartao");
    const dadosPix = document.getElementById("dados-pix");
    const dadosBoleto = document.getElementById("dados-boleto");

    if (!metodoPagamento || !dadosCartao || !dadosPix || !dadosBoleto) {
      return;
    }

    const metodo = metodoPagamento.value;
    dadosCartao.classList.toggle("d-none", metodo !== "cartao");
    dadosPix.classList.toggle("d-none", metodo !== "pix");
    dadosBoleto.classList.toggle("d-none", metodo !== "boleto");

    const validadeCartao = document.getElementById("validade-cartao");

    if (validadeCartao) {
      validadeCartao.required = metodo === "cartao";
    }
  }

  window.mostrarFormularioPagamento = function() {
    if (app.carrinho.length === 0) {
      alert("Adicione um jogo ao carrinho primeiro!");
      window.mostrarSecao("carrinho");
      return;
    }

    window.mostrarSecao("pedido");
  };

  window.abrirPedido = window.mostrarFormularioPagamento;
  window.cancelarPagamento = function() {
    window.mostrarSecao("carrinho");
  };

  window.alternarCamposPagamento = alternarCamposPagamento;

    function confirmarPedido(metodo, formulario) {
    document.getElementById("confirmacao-quantidade").textContent =
      app.carrinho.length;

    document.getElementById("confirmacao-total").textContent =
      document.getElementById("total-pagamento").textContent;

    document.getElementById("confirmacao-metodo").textContent = metodo;

    const modal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById("modalPedidoConfirmado")
    );

    modal.show();

    app.carrinho = [];
    app.salvarCarrinho();
    app.atualizarCarrinho();
    atualizarResumoPedido();

    formulario.reset();
    alternarCamposPagamento();
  }

  app.initCheckout = function() {
    atualizarResumoPedido();

    const metodoPagamento = document.getElementById("metodo-pagamento");

    if (metodoPagamento) {
      metodoPagamento.addEventListener("change", alternarCamposPagamento);
      alternarCamposPagamento();
    }

    const formPagamento = document.getElementById("form-pagamento");

    if (formPagamento) {
      formPagamento.addEventListener("submit", function(event) {
        event.preventDefault();

        if (app.carrinho.length === 0) {
          alert("Adicione um jogo ao carrinho primeiro!");
          window.mostrarSecao("carrinho");
          return;
        }

                const metodo = metodoPagamento.options[metodoPagamento.selectedIndex].text;

        if (metodoPagamento.value === "pix") {
          document.getElementById("valor-pix").textContent =
            document.getElementById("total-pagamento").textContent;

          const elementoPix = document.getElementById("modalPagamentoPix");
          const modalPix = bootstrap.Modal.getOrCreateInstance(elementoPix);

          document.getElementById("simular-pix").onclick = function() {
            elementoPix.addEventListener("hidden.bs.modal", function() {
              confirmarPedido(metodo, formPagamento);
            }, { once: true });

            modalPix.hide();
          };

          modalPix.show();
          return;
        }

        confirmarPedido(metodo, formPagamento);
      });
    }

    const validadeCartao = document.getElementById("validade-cartao");

    if (validadeCartao) {
      validadeCartao.addEventListener("input", function() {
        let valor = this.value.replace(/\D/g, "").slice(0, 4);

        if (valor.length > 2) {
          valor = valor.slice(0, 2) + "/" + valor.slice(2);
        }

        this.value = valor;
      });
    }
  };
})();
