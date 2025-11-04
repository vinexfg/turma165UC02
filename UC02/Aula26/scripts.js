



const container = document.getElementById('cores')




// for (let i = 0;  i < cores.length; i++){
//     container.innerHTML += "<p>" + cores[i] + "</p>"
// }


// // for(let i = 0; i < cores.length; i++){
// //     let p = document.createElement('p');
// //     p.textContent = cores[i]
// // }



const cores = ['vermelho', 'azul', 'amarelo']
const section = document.querySelector('section')

for(let i = 0; i < cores.length; i++){
    let p = document.createElement('p');
    p.textContent = cores[i]
    p.classList.add(cores[i])
    section.appendChild(p);

}


function for_each(){
    cores.forEach(c =>{
        let p = document.createElement(' p');
        p.textContent = c;
        section.appendChild(p);
    })
}



 function alunos(){
    let section = document.querySelectorAll("section");
    console.log(section.length);
    let quantidade = parseInt(prompt(' Digite a quantidade de alunos'))
    if(quantidade > 0 && typeof quantidade == "number"){
        for(let i=0; i<quantidade;  i++){
            let nome = prompt(`Informe o nome do aluno ${i+1}:`);
            alunos.push(nome);
        }
        alunos.forEach(a =>{
            let item = document.createElement('li')
            item.textContent = a
            section.appendChild(item)

        })
    }else{
        alert('Entrada invalida!');
        
    }
 }

 alunos();