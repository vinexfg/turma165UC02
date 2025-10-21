let tarefas = [];

let input = document.querySelector("#tarefa");
let lista = document.querySelector("#lista");
let btnAdd = document.querySelector("#btnAdd");

<<<<<<< HEAD
btnAdd.addEventListener("click", () => {
  if (input.value === "") {
    alert("Digite uma tarefa");
  } else {
    tarefas.push(input.value);
  }
  input.value = "";
});

function mostrarTarefas() {
  lista.textContent = "";
  tarefas.forEach((t) => {
    let li = document.createElement("li");
    li.textContent = t;
    let editar = document.createElement("button");
    editar.textContent = "Editar";

    let excluir = document.createElement("button");
    excluir.textContent = "Excluir";
    li.appendChild("editar");
    li.appendChild("excluir");
    lista.appendChild(li);
  });
}

=======
let indiceEdicao = null;

btnAdd.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Digite uma tarefa");
        return;
    }

    if (indiceEdicao === null) {
        tarefas.push(input.value.trim());
    } else {
        tarefas[indiceEdicao] = input.value.trim();
        indiceEdicao = null;
        btnAdd.textContent = 'Adicionar';
    }

    mostrarTarefas();
    input.value = '';
});

function mostrarTarefas() {
    lista.innerHTML = '';

    tarefas.forEach((tarefa, i) => {
        let li = document.createElement('li');
        li.textContent = tarefa + ' ';

        let editar = document.createElement('button');
        editar.textContent = 'Editar';
        editar.addEventListener('click', () => {
            input.value = tarefas[i];
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
                    input.value = '';
                }

                mostrarTarefas();
            }
        });

        li.appendChild(editar);
        li.appendChild(excluir);
        lista.appendChild(li);
    });
}






>>>>>>> 3a73487b1ada39da4135ab24401da69cb5a9f65f
/// o que tenho que estudar  (addEventListener) (forEach) (appendChild) (===) ()
