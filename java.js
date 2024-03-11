  // Criando array de usuários e senhas (para fins educacionais)
  var usuarios = [
    { usuario: 'usuario1', senha: 'senha1' },
    { usuario: 'usuario2', senha: 'senha2' },
    { usuario: 'usuario3', senha: 'senha3' }
  ];

  // Função para verificar a existência do usuário e autenticar
  function autenticarUsuario() {
    // Solicitar usuário e senha
    var nomeUsuario = prompt("Digite seu usuário:");

    // Verificar se o usuário digitou algo
    if (!nomeUsuario) {
      alert("O campo de usuário deve ser preenchido. Tente novamente.");
      return;
    }

    var senhaUsuario = prompt("Digite sua senha:");

    // Verificar se a senha foi digitada
    if (!senhaUsuario) {
      alert("O campo de senha deve ser preenchido. Tente novamente.");
      return;
    }

    // Verificar a existência do usuário no array
    var usuarioEncontrado = usuarios.find(function(user) {
      return user.usuario === nomeUsuario;
    });

    if (usuarioEncontrado) {
      // Verificar se a senha está correta
      if (usuarioEncontrado.senha === senhaUsuario) {
        alert("Autenticação bem-sucedida!");
      } else {
        alert("Senha incorreta. Tente novamente.");
      }
    } else {
      alert("Usuário não encontrado. Tente novamente.");
    }
  }

  // Chamar a função quando a página estiver carregada
  window.onload = autenticarUsuario;

