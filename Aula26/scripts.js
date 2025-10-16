


const cores = ['vermelho', 'azul', 'Amarelo']
const container = document.getElementById('cores')

for (let i = 0;  i < cores.length; i++){
    container.innerHTML += "<p>" + cores[i] + "</p>"
}


// for(let i = 0; i < cores.length; i++){
//     let p = document.createElement('p');
//     p.textContent = cores[i]
// }


