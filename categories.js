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

  window.Gamezone.initCategories = function() {
    const container = document.getElementById("lista-categorias");

    if (!container) {
      return;
    }

    container.innerHTML = window.Gamezone.categorias.map(function(categoria, indice) {
      const jogosDaCategoria = window.Gamezone.ordenarJogosAlfabeticamente(
        categoria.jogoIds
          .map(id => window.Gamezone.jogos.find(jogo => jogo.id === id))
          .filter(Boolean)
      );

      const cards = jogosDaCategoria
        .map(window.Gamezone.renderizarCardJogo)
        .join("");

      return `
        <section id="categoria-${indice}" class="mb-5 secao-categoria">
          <h2 class="h4 text-warning mb-3">${escaparHtml(categoria.nome)}</h2>
          <div class="row g-4">${cards}</div>
        </section>
      `;
        }).join("");

    const menuGeneros = document.getElementById("menu-generos");

    if (menuGeneros) {
      menuGeneros.innerHTML = window.Gamezone.categorias.map(function(categoria, indice) {
        return `
          <button type="button" class="btn-genero"
                  data-categoria="${indice}">
            ${escaparHtml(categoria.nome)}
          </button>
        `;
      }).join("");

      menuGeneros.addEventListener("click", function(event) {
        const botao = event.target.closest(".btn-genero");

        if (!botao) {
          return;
        }

        const secao = document.getElementById(
          "categoria-" + botao.dataset.categoria
        );

        if (secao) {
          secao.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    }
  };
})();
