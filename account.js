(function() {
    function mostrarAvisoConta(titulo, mensagem, sucesso) {
    const modal = document.getElementById("modalAvisoConta");
    const icone = document.getElementById("iconeAvisoConta");

    document.getElementById("tituloAvisoConta").textContent = titulo;
    document.getElementById("mensagemAvisoConta").textContent = mensagem;

    icone.textContent = sucesso ? "✓" : "!";
    icone.className = sucesso
      ? "display-3 mb-3 text-success"
      : "display-3 mb-3 text-danger";

    document.getElementById("botaoAvisoConta").textContent =
      sucesso ? "Continuar" : "Tentar novamente";

    bootstrap.Modal.getOrCreateInstance(modal).show();
  }
  function mostrarCadastro() {
    const areaLogin = document.getElementById("area-login");
    const areaCadastro = document.getElementById("area-cadastro");

    if (areaLogin && areaCadastro) {
      areaLogin.classList.add("d-none");
      areaCadastro.classList.remove("d-none");
    }
  }

  function mostrarLogin() {
    const areaCadastro = document.getElementById("area-cadastro");
    const areaLogin = document.getElementById("area-login");

    if (areaCadastro && areaLogin) {
      areaCadastro.classList.add("d-none");
      areaLogin.classList.remove("d-none");
    }
  }

  function abrirPerfil() {
    const usuarioSalvo = localStorage.getItem("usuarioGamezone");
    const areaPerfil = document.getElementById("area-perfil");

    if (!usuarioSalvo || !areaPerfil) {
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);
    document.getElementById("area-login").classList.add("d-none");
    document.getElementById("area-cadastro").classList.add("d-none");
    areaPerfil.classList.remove("d-none");
    document.getElementById("perfil-nome").textContent = usuario.nome;
    document.getElementById("perfil-email").textContent = usuario.email;
  }

  function sairConta() {
    sessionStorage.removeItem("sessaoGamezone");
    const areaPerfil = document.getElementById("area-perfil");
    const areaLogin = document.getElementById("area-login");

    if (areaPerfil && areaLogin) {
      areaPerfil.classList.add("d-none");
      areaLogin.classList.remove("d-none");
    }
  }

  window.mostrarCadastro = mostrarCadastro;
  window.mostrarLogin = mostrarLogin;
  window.abrirPerfil = abrirPerfil;
  window.sairConta = sairConta;

  window.Gamezone.initAccount = function() {
    const formCadastro = document.getElementById("form-cadastro");

    if (formCadastro) {
      formCadastro.addEventListener("submit", function(event) {
        event.preventDefault();

        const usuario = {
          nome: document.getElementById("cadastro-nome").value.trim(),
          email: document.getElementById("cadastro-email").value.trim()
        };

        localStorage.setItem("usuarioGamezone", JSON.stringify(usuario));
        mostrarAvisoConta(
  "Conta criada com sucesso!",
  "Bem-vindo à Gamezone! Seu perfil foi criado.",
  true
);
        this.reset();
        abrirPerfil();
      });
    }

    const formLogin = document.getElementById("form-login");

    if (formLogin) {
      formLogin.addEventListener("submit", function(event) {
        event.preventDefault();
        const usuarioSalvo = localStorage.getItem("usuarioGamezone");

        if (!usuarioSalvo) {
          mostrarAvisoConta(
  "Conta não cadastrada",
  "Crie uma conta para acessar a Gamezone.",
  false
);
          return;
        }

        const usuario = JSON.parse(usuarioSalvo);
        const email = document.getElementById("login-email").value.trim();

        if (email.toLowerCase() !== usuario.email.toLowerCase()) {
          mostrarAvisoConta(
  "E-mail não encontrado",
  "Verifique o e-mail informado e tente novamente.",
  false
);
          return;
        }

        sessionStorage.setItem("sessaoGamezone", "ativa");
        this.reset();
        abrirPerfil();
      });
    }

    if (sessionStorage.getItem("sessaoGamezone") === "ativa") {
      abrirPerfil();
    }
  };
})();
