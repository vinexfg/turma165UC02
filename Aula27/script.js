let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

let inputNome = document.querySelector('#nome');
let inputMatricula = document.querySelector('#matricula');
let lista = document.querySelector('#lista');
let btnAdd = document.querySelector('#btnAdd');

let indiceEdicao = null;

btnAdd.addEventListener("click", () => {
    let nome = inputNome.value.trim();
    let matricula = inputMatricula.value.trim();

    if (nome === "" || matricula === "") {
        alert("Digite nome e matrícula");
        return;
    }

    if (indiceEdicao === null) {
        tarefas.push({ nome, matricula });
    } else {
        tarefas[indiceEdicao] = { nome, matricula };
        indiceEdicao = null;
        btnAdd.textContent = 'Adicionar';
    }

    salvarTarefas();
    mostrarTarefas();

    inputNome.value = '';
    inputMatricula.value = '';
});

function mostrarTarefas() {
    lista.innerHTML = '';

    tarefas.forEach((tarefa, i) => {
        let li = document.createElement('li');
        li.textContent = `Nome: ${tarefa.nome} | Matrícula: ${tarefa.matricula} `;

        let editar = document.createElement('button');
        editar.textContent = 'Editar';
        editar.addEventListener('click', () => {
            inputNome.value = tarefa.nome;
            inputMatricula.value = tarefa.matricula;
            indiceEdicao = i;
            btnAdd.textContent = 'Atualizar';
        });

        let excluir = document.createElement('button');
        excluir.textContent = 'Excluir';

        excluir.addEventListener('click', () => {
            if (window.confirm('Deseja realmente apagar a tarefa?')) {
                tarefas.splice(i, 1);

                if (indiceEdicao === i) {
                    indiceEdicao = null;
                    btnAdd.textContent = 'Adicionar';
                    inputNome.value = '';
                    inputMatricula.value = '';
                }

                salvarTarefas();
                mostrarTarefas();
            }
        });

        li.appendChild(editar);
        li.appendChild(excluir);
        lista.appendChild(li);
    });
}

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}


mostrarTarefas();
