function buscarUsuario(callback) {
    setTimeout(() => 
    { console.log('Usuário encontrado');
      callback();
    }, 1000);
  }
  
  function buscarPerfil(callback) {
    setTimeout(() => {
      console.log('Perfil do usuário encontrado');
      callback();
    }, 3000);
  }
  
  function exibirMensagem(callback) {
    setTimeout(() => {
      console.log('Bem-vindo ao sistema!');
      callback();
    }, 5000);
  }
  
  buscarUsuario(() => {
    console.log("busca usuario terminou")
  })
  buscarPerfil(() => {
    console.log("busca perfil terminou")
  })
  exibirMensagem(() => {
    console.log("Fim!")
  })
