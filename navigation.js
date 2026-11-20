(function() {
  function obterCaminhoPagina(pagina) {
    return window.location.pathname.includes("/pages/")
      ? `${pagina}.html`
      : `pages/${pagina}.html`;
  }

  window.mostrarSecao = function(idSecao) {
    const paginas = {
      loja: window.location.pathname.includes("/pages/")
        ? "../index.html"
        : "index.html",
      biblioteca: obterCaminhoPagina("biblioteca"),
      carrinho: obterCaminhoPagina("carrinho"),
      categorias: obterCaminhoPagina("categorias"),
      pedido: obterCaminhoPagina("pedido"),
      conta: obterCaminhoPagina("conta")
    };

    if (paginas[idSecao]) {
      window.location.href = paginas[idSecao];
    }
  };
})();
