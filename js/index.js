document.addEventListener('DOMContentLoaded', () => {
    let usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    document.getElementById('welcome').innerText = usuarioLogado.nome;
    document.getElementById('extras').innerText = `Email: ${usuarioLogado.email}\n Senha: ${usuarioLogado.senha}`;
});

document.querySelector('.sair').addEventListener('click', () => {
    sessionStorageStorage.removeItem('usuarioLogado');
});