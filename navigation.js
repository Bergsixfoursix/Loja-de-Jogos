(function() {
  window.mostrarSecao = function(idSecao) {
    const dentroDaPastaPages = window.location.pathname
      .replace(/\\/g, "/")
      .includes("/pages/");
    const prefixoPaginas = dentroDaPastaPages ? "" : "pages/";
    const paginas = {
      loja: dentroDaPastaPages ? "../index.html" : "index.html",
      carrinho: prefixoPaginas + "carrinho.html",
      categorias: prefixoPaginas + "categorias.html",
      pedido: prefixoPaginas + "pedido.html",
      conta: prefixoPaginas + "conta.html"
    };

    if (paginas[idSecao]) {
      window.location.href = paginas[idSecao];
    }
  };
})();
