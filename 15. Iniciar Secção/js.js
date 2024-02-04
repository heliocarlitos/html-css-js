function Logar() {
    const NomeDeUsuario = 'helio';
    const Senha = 5515;
    const NomeDeUsuarioDigitado = prompt('Nome de Usuário');
    const SenhaDigitada = prompt('Senha');

    if (NomeDeUsuarioDigitado === '' || SenhaDigitada === ''){
        alert('Prencha Todos Campos!');
        Logar();
    }
    if (NomeDeUsuarioDigitado == NomeDeUsuario && SenhaDigitada == Senha){
        alert('Logado com Sucesso!');
    }
    if (NomeDeUsuarioDigitado != NomeDeUsuario || SenhaDigitada != Senha){
        alert('Usuário ou Senha Inválido!');
        Logar();
    }
}