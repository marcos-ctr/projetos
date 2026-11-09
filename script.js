let tarefas = [];

function renderizarTarefas() {
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = tarefas
        .map((tarefa, index) => `
            <li>
                ${tarefa.novaTarefa}
                <button onclick="excluirTarefa(${index})">Excluir</button>
            </li>
        `)
        .join('');
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}

document.getElementById('form-cadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeInput = document.getElementById('campo').value.trim();

    if (nomeInput === "") {
        alert("Por favor, preencha o campo");
        return;
    }

    tarefas.push({ novaTarefa: nomeInput });
    renderizarTarefas();

    document.getElementById('campo').value = "";
});

