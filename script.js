const senhaCorreta = "1610";
let inputSenha = document.getElementById("inputSenha");
let botoes = document.querySelectorAll(".teclado button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        if (botao.id === "apagar") {
            inputSenha.value = inputSenha.value.slice(0, -1);
        } else {
            inputSenha.value += botao.textContent;
        }
    });
});

document.getElementById("verificar").addEventListener("click", () => {
    if (inputSenha.value === senhaCorreta) {
        document.getElementById("tela-senha").classList.add("escondido");
        document.getElementById("tela-presente").classList.remove("escondido");
    } else {
        alert("Senha incorreta!");
        inputSenha.value = "";
    }
});

function mostrarPremio() {
    document.getElementById("tela-presente").classList.add("escondido");
    document.getElementById("tela-premio").classList.remove("escondido");
}

function irParaReacao() {
    document.getElementById("tela-premio").classList.add("escondido");
    document.getElementById("tela-reacao").classList.remove("escondido");
}