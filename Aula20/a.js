let texto = document.querySelector('h1')
texto.textContent = "Aula manipulacao do Dom"

texto.innerText += "<u> test </u>" 


document.body.innerHTML += "<main> <h3> Criando elementos inline </h3> </main>"

// craindo um paragrafo no HTML
let novoParagrafro = document.createElement("p");
novoParagrafro.textContent = 'Texto craido dinaminicamente'
document.body.appendChild(novoParagrafro)


function adicionarItem(){
    let item = document.getElementById("item").value;
    let novoItem = document.createElement("li")
    novoItem.textContent = item;
    document.getElementById('lista').appendChild(novoItem);
    document.getElementById('item').value = "";
}   


let idade = parseInt(prompt('Digite sua idade:'));

if(idade < 18){
    alert("voce e menor idade")
}

else if( idade < 60){
    alert(
        'voce e aduto'
    )
}

else{
    alert(' voce e idoso ')
}