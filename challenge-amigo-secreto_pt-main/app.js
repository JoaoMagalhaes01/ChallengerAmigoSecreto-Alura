// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // Validação: campo vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista exibida
    atualizarLista();

    // Limpa o campo
    input.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // limpa a lista antes de renderizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Validação: se não houver nomes
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Gera índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto: <strong>${amigoSorteado}</strong></li>`;
}