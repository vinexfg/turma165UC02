let titulo = document.getElementById("titulo");

console.log(typeof titulo);
console.log(titulo.innerText);




let itens = document.getElementsByClassName('teste')
console.log(itens)

let cabecalhoH1 = document.getElementsByTagName("h1");
console.log(itens[0].innerText)
console.log(itens[1].innerText)


// capturando com seletor

let paragrafo = document.querySelectorAll('p');
console.log(paragrafo[0].innerText);


let todasClass = document.querySelectorAll('p');
console.log(paragrafo[1].innerText);


paragrafo[0].textContent = "Estou manipulando o dom"

paragrafo[1].innerHTML = '<u> Estou manipulando o DOM </u>'

paragrafo[1].style.color = "red"
paragrafo[1].style.fontSize = '1.5rem'


let item = document.getElementsByClassName('teste')
 item[0].classList.add('texto')

 