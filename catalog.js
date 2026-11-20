(function() {
  function escaparHtml(valor) {
    const caracteres = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    };

    return String(valor).replace(/[&<>"']/g, caractere => caracteres[caractere]);
  }

  function calcularDesconto(jogo) {
    if (!jogo.precoOriginal || jogo.precoOriginal <= jogo.preco) {
      return 0;
    }

    return Math.round((1 - jogo.preco / jogo.precoOriginal) * 100);
  }

  function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  function ordenarJogosAlfabeticamente(jogos) {
    return [...jogos].sort((jogoA, jogoB) =>
      jogoA.nome.localeCompare(jogoB.nome, "pt-BR", { sensitivity: "base" })
    );
  }

  function renderizarCardJogo(jogo) {
    const nome = escaparHtml(jogo.nome);
    const imagem = escaparHtml(jogo.imagem);
    const desconto = calcularDesconto(jogo);

    return `
      <div class="col-6 col-lg-4 jogo">
        <div class="card bg-secondary text-white h-100">
          <div class="game-cover" tabindex="0" role="button" aria-label="Ver detalhes de ${nome}" aria-controls="detalhes-jogo" aria-expanded="false" data-game-id="${jogo.id}">
            <img src="${imagem}" class="card-img-top" alt="Capa de ${nome}" onerror="this.style.display='none';this.parentElement.classList.add('game-cover-fallback')">
            <h5 class="card-title game-title-overlay">${nome}</h5>
            ${desconto ? `<span class="tag-desconto game-discount-overlay">${desconto}% OFF</span>` : ""}
          </div>
        </div>
      </div>
    `;
  }

  function mostrarDetalhesJogo(id) {
    const jogo = window.Gamezone.jogos.find(item => item.id === id);
    const detalhes = document.getElementById("detalhes-jogo");

    if (!jogo || !detalhes) {
      return;
    }

    const nome = escaparHtml(jogo.nome);
    const descricao = escaparHtml(jogo.descricao);
    const imagem = escaparHtml(jogo.imagem);
    const desconto = calcularDesconto(jogo);
    const precoDetalhe = desconto
      ? `
        <div class="d-flex flex-column align-items-start mb-3">
          <span class="preco-antigo">De <del>${formatarPreco(jogo.precoOriginal)}</del></span>
          <span class="preco-novo">Por ${formatarPreco(jogo.preco)}</span>
          <span class="tag-desconto mt-2">${desconto}% OFF</span>
        </div>
      `
      : `<p class="fw-bold fs-5 text-warning mt-auto">${formatarPreco(jogo.preco)}</p>`;

    detalhes.innerHTML = `
      <div class="card bg-secondary text-white">
        <div class="row g-0 align-items-stretch">
          <div class="col-md-4">
            <img src="${imagem}" class="game-details-image" alt="Capa de ${nome}" onerror="this.style.display='none';this.parentElement.classList.add('game-cover-fallback')">
          </div>
          <div class="col-md-8">
            <div class="card-body h-100 d-flex flex-column align-items-start">
              <h2 id="detalhes-jogo-titulo" class="h3">${nome}</h2>
              <p>${descricao}</p>
              ${precoDetalhe}
              <button class="btn btn-primary" type="button" onclick="adicionarAoCarrinho(${jogo.id})">
                Adicionar ao Carrinho
              </button>
              <button class="btn btn-outline-light mt-2" type="button" data-voltar-topo>
                Voltar ao topo
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    detalhes.classList.remove("d-none");

    document.querySelectorAll(".game-cover[aria-expanded]").forEach(function(capa) {
      capa.setAttribute("aria-expanded", String(Number(capa.dataset.gameId) === id));
    });

    detalhes.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  window.Gamezone.ordenarJogosAlfabeticamente = ordenarJogosAlfabeticamente;
  window.Gamezone.renderizarCardJogo = renderizarCardJogo;

  window.Gamezone.initCatalog = function() {
    const gradeLoja = document.querySelector("#loja > .row.g-4");

    if (gradeLoja) {
      const cardsPorId = new Map(
        Array.from(gradeLoja.querySelectorAll(".jogo")).map(function(card) {
          const capa = card.querySelector(".game-cover[data-game-id]");
          return [Number(capa.dataset.gameId), card];
        })
      );

      ordenarJogosAlfabeticamente(window.Gamezone.jogos).forEach(function(jogo) {
        const card = cardsPorId.get(jogo.id);

        if (card) {
          gradeLoja.appendChild(card);
        }
      });
    }

    document.addEventListener("click", function(event) {
      const botaoTopo = event.target.closest("[data-voltar-topo]");

      if (botaoTopo) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const card = event.target.closest(".jogo");
      const capa = card && card.querySelector(".game-cover[data-game-id]");

      if (capa) {
        mostrarDetalhesJogo(Number(capa.dataset.gameId));
      }
    });

    document.addEventListener("keydown", function(event) {
      const capa = event.target.closest(".game-cover[data-game-id]");

      if (capa && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        mostrarDetalhesJogo(Number(capa.dataset.gameId));
      }
    });

    const grade = document.getElementById("jogos-adicionais");

    if (grade) {
      const jogosNovos = ordenarJogosAlfabeticamente(
        window.Gamezone.jogos.filter(jogo => jogo.id > 10 && jogo.imagem)
      );

      grade.innerHTML = jogosNovos.map(renderizarCardJogo).join("");
    }

    const pesquisa = document.getElementById("pesquisa-jogos");

    if (!pesquisa) {
      return;
    }

    pesquisa.addEventListener("input", function() {
      const texto = pesquisa.value.trim().toLowerCase();
      const cards = document.querySelectorAll(".jogo");
      let encontrados = 0;

      cards.forEach(function(card) {
        const titulo = card.querySelector(".card-title");
        const corresponde = titulo &&
          titulo.textContent.trim().toLowerCase().includes(texto);

        card.style.display = corresponde ? "" : "none";

        if (corresponde) {
          encontrados++;
        }
      });

      const mensagem = document.getElementById("sem-resultados");

      if (mensagem) {
        mensagem.classList.toggle("d-none", encontrados > 0);
      }
    });
  };
})();
