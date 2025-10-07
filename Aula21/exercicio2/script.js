
function casa(){
    let numero = document.getElementById('pergunta').value
    let resultado =document.createElement('h1')
    
    if(numero % 2 == 0){
        print
    }
}


function ParImpa(){
    let numero = Number(prompt('Digite o numero:'))
    let texto = ''

    if(numero % 2 == 0){
        texto = `Seu numero ${numero} e par `
    }
    else{
        texto = `Seu numero ${numero} e impa`
    }
     document.getElementById('resultado').innerText(texto)
}

