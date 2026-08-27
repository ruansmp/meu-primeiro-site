function enviarNome() {
    // 1. Pegamos o valor (texto) que o usuário digitou no campo de texto
    var nomeUsuario = document.getElementById("campo-nome").value;

    // Se o usuário não digitar nada, avisamos para ele preencher
    if (nomeUsuario === "") {
        alert("Por favor, digite o seu nome!");
        return; // Para a execução do código aqui
    }

    // 2. Buscamos o título h1 da página e mudamos o texto dele com o nome digitado
    var titulo = document.getElementById("titulo-boas-vindas");
    titulo.innerHTML = "Seja bem-vindo(a), " + nomeUsuario + "! 👋";
    titulo.style.color = "#00ffff"; // Muda o título para ciano

    // 3. Modificamos o parágrafo debaixo também
    var paragrafo = document.getElementById("texto-principal");
    paragrafo.innerHTML = "Você acabou de criar um sistema interativo usando variáveis em JavaScript.";
    paragrafo.style.color = "#4ecc71";

    // 4. Carrega a sua imagem local (coloque o mesmo nome do seu arquivo aqui)
    var imagem = document.createElement("img");
    imagem.src = "vyse.jpeg"; 
    imagem.className = "imagem-sucesso";

    var container = document.getElementById("espaco-da-imagem");
    
    if (container.children.length === 0) {
        container.appendChild(imagem);
    }
}
// Mantenha a função enviarNome() lá em cima e cole esta embaixo:

function alternarTema() {
    // 1. Selecionamos o corpo (body) inteiro do site
    var corpoDoSite = document.body;
    
    // 2. Selecionamos o botão do tema para mudar o texto dele depois
    var botao = document.getElementById("botao-tema");

    // 3. O comando 'toggle' liga ou desliga a classe "tema-claro" no body
    corpoDoSite.classList.toggle("tema-claro");

    // 4. Verificamos se o tema claro está ativo para mudar o texto do botão
    if (corpoDoSite.classList.contains("tema-claro")) {
        botao.innerHTML = "Modo Escuro 🌙";
    } else {
        botao.innerHTML = "Modo Claro ☀️";
    }
}
