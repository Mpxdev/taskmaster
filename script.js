document.addEventListener('DOMContentLoaded', () => {
    const inputNovaTarefa = document.getElementById('inputNovaTarefa');
    const btnAdicionarTarefa = document.getElementById('btnAdicionarTarefa');
    const listaTarefas = document.getElementById('listaTarefas');

    function criarTarefa(tarefaTexto) {
        const li = document.createElement('li');
        const spanTextoTarefa = document.createElement('span');
        spanTextoTarefa.classList.add('textoTarefa');
        spanTextoTarefa.textContent = tarefaTexto;

        const divBotoes = document.createElement('div');

        const btnEditar = document.createElement('button');
        btnEditar.classList.add('btnAcao');
        btnEditar.innerHTML = '<i class="fa fa-pencil" style="font-size: 14px;"></i>';
        btnEditar.addEventListener('click', () => editarTarefa(spanTextoTarefa));

        const btnExcluir = document.createElement('button');
        btnExcluir.classList.add('btnAcao');
        btnExcluir.innerHTML = '<i class="fa fa-trash" style="font-size: 14px;"></i>';
        btnExcluir.addEventListener('click', () => excluirTarefa(li));

        divBotoes.appendChild(btnEditar);
        divBotoes.appendChild(btnExcluir);

        li.appendChild(spanTextoTarefa);
        li.appendChild(divBotoes);

        return li;
    }

    function adicionarTarefa() {
        const tarefaTexto = inputNovaTarefa.value.trim();
        if (tarefaTexto !== '') {
            const novaTarefa = criarTarefa(tarefaTexto);
            listaTarefas.appendChild(novaTarefa);
            inputNovaTarefa.value = '';
            inputNovaTarefa.focus();
        }
    }

    function editarTarefa(spanTextoTarefa) {
        const novoTexto = prompt('Editar tarefa:', spanTextoTarefa.textContent);
        if (novoTexto !== null && novoTexto.trim() !== '') {
            spanTextoTarefa.textContent = novoTexto.trim();
        }
    }

    function excluirTarefa(tarefa) {
        listaTarefas.removeChild(tarefa);
    }

    btnAdicionarTarefa.addEventListener('click', adicionarTarefa);

    inputNovaTarefa.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            adicionarTarefa();
        }
    });
});
