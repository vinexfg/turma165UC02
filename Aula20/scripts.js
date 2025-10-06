let texto = document.querySelector('h1')
texto.textContent = "Aula manipulacao do Dom"

texto.innerText += "<u> test </u>" 


document.body.innerHTML += "<main> <h3> Criando elementos inline </h3> </main>"


let novoParagrafro = document.createElement("p");

novoParagrafro.textContent = 'Texto craido dinaminicamente'
