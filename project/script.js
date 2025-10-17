let tarefas = [];

let input = document.querySelector('#tarefa');
let lista = document.querySelector('#lista');
let btnAdd = document.querySelector('#btnAdd');

btnAdd.addEventListener("click", () =>{
    if(input.value === ""){
        alert("Digite uma tarefa");
    }else{
        tarefas.push(input.value)
    }
    input.value = '';

})

function mostrarTarefas(){
    lista.textContent = ''
    tarefas.forEach(t=>{
        let li  = document.createElement('li');
        li.textContent = t
        let editar = document.createElement('button')
        editar.textContent = 'Editar'

        let excluir = document.createElement('button')
        excluir.textContent = 'Excluir'
        li.appendChild('editar')
        li.appendChild('excluir')
        lista.appendChild(li);
    })
}



/// o que tenho que estudar  (addEventListener) (forEach) (appendChild) (===) ()

