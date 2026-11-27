(function() {
  window.mostrarSecao = function(idSecao) {
    const paginas = {
      loja: "index.html",
      biblioteca: "biblioteca.html",
      carrinho: "carinho.html",
      categorias: "categorias.html",
      pedido: "pedido.html",
      conta: "conta.html"
    };

    if (paginas[idSecao]) {
      window.location.href = paginas[idSecao];
    }
  };
})();