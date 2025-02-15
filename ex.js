let listaAmigos = [];
// função de adicionar amigo //
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nomeAmigo = input.value.trim();

    // Permitir adicionar com a tecla "Enter"
document.getElementById('amigo').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
// se o nome do amigo for vazio, exibir um alerta pedindo para inserir um nome //
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    listaAmigos.push(nomeAmigo);
    atualizarLista();
    input.value = '';
}
// função de atualizar lista de amigos //
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaAmigos.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}
// função de sortear amigo //
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos 2 amigos!');
        return;
    }
    let sorteio = [...listaAmigos];

// Embaralhar lista garantindo que ninguém se sorteie
    do {
        for (let i = sorteio.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
        }
    } while (sorteio.some((nome, index) => nome === listaAmigos[index]));

    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = (i === listaAmigos.length - 1) ? sorteio[0] : sorteio[i + 1];

        let item = document.createElement('li');
        item.textContent = `${sorteio[i]} → ${amigo}`;
        resultadoLista.appendChild(item);
    }
// Mostrar botão de reset
document.getElementById('resetButton').style.display = 'inline-block';
}
function resetarJogo() {
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}