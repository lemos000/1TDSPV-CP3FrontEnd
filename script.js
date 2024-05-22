const verificacao = document.querySelector(".acessar");
const addUser = document.querySelector(".criar");

let listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    {nome: "Clark", email: "cl@email", senha: "123"}
];

localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));


addUser.addEventListener('click', () => {
    console.log(localStorage)
    const nomeInput = document.getElementById('idNome');
    const emailInput = document.getElementById('idEmailC');
    const senhaInput = document.getElementById('idSenhaC');
    const msgStatus = document.querySelector('.valida2');
    msgStatus.classList.remove("sucesso", "erro");

    if (nomeInput.value && emailInput.value && senhaInput.value) {
        let usuarioexistente = listaUsuarios.find(user => user.email === emailInput.value);
        if (usuarioexistente) {
            msgStatus.classList.add("erro");
            msgStatus.innerText = "Usuário já existente";
            setTimeout(() => { 
                msgStatus.innerText = null
                msgStatus.classList.remove("erro");
            }, 5000);
        } else {
            let newUser = {
                nome: nomeInput.value,
                email: emailInput.value,
                senha: senhaInput.value
            };
            listaUsuarios.push(newUser);
            localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
            msgStatus.classList.add("sucesso");
            sessionStorage.setItem('usuarioLogado', JSON.stringify(newUser));
            msgStatus.innerText = "Usuário adicionado com SUCESSO!";
            setTimeout(() => {
                msgStatus.innerText = "Redirecionando...";
                setTimeout(() => {
                    window.location.href = "./index.html";
                }, 3000);
            }, 2000);
        }
    } else {
        msgStatus.classList.add("erro");
        msgStatus.innerText = "Preencha todos os campos!";
        setTimeout(() => { 
            msgStatus.innerText = null
            msgStatus.classList.remove("erro");
        }, 5000);
    }
});

verificacao.addEventListener('click', () => {
    let msgStatus = document.querySelector(".valida");
    msgStatus.classList.remove("sucesso", "erro");

    let input1 = document.getElementById("idEmail");
    let input2 = document.getElementById("idSenha");

    let usuarioValido = false;
    let usuarioLogado = null;

    for (let x = 0; x < listaUsuarios.length; x++) {    
        if (input1.value === listaUsuarios[x].email && input2.value === listaUsuarios[x].senha) {
            usuarioValido = true;
            usuarioLogado = listaUsuarios[x];
            break;
        }
    }

    if (usuarioValido) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        msgStatus.classList.add("sucesso");
        msgStatus.innerText = "Login realizado com SUCESSO!";
        setTimeout(() => { 
            window.location.href = "./index.html";
        }, 5000);
    } else {
        msgStatus.classList.add("erro");
        msgStatus.innerText = "Email e/ou senha inválidos!";
        setTimeout(() => { 
            msgStatus.innerText = null
            msgStatus.classList.remove("erro");
        }, 5000);
    }
});
