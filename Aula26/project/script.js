let tarefa = [];

let input = document.querySelector('#tarefa');
let lista = document.querySelector('#lista');
let btnAdd = document.querySelector('#btnAdd');

btnAdd.addEventListener("click", () =>{
    if(input.value === ""){
        alert("Digite uma tarefa");
    }else{
        tarefa.push(input.value)
    }
    input.value = '';

})


console.log(tarefa)

