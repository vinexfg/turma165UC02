function questao01(){
    let hora  = parseInt(document.getElementById('hora').value)
    let resultado = document.getElementById('resposta');

    if (hora<=11){
        resultado.textContent= "Bom dia 🐒"
    }
    else if(hora<=17){
        resultado.textContent = " Boa tarde 🐒"
    }
    else if(hora<=23){
        resultado.textContent= ' Boa Noite 🐒'
    }
    else{
        resultado.textContent ='Entrada invalida'
    }
}


function questao02(){
    let numero = parseInt(document.getElementById('numero').value)
    let resultado = document.getElementById('resposta02')

    if(numero % 2 ==0){
        resultado.textContent = `Seu numero ${numero} e par`
    }
    else {
        resultado.textContent = `Seu numero ${numero} e impa`
    }
}


function questao03(){
        let nota = document.getElementById('nota').value;
        let resultado = document.getElementById('resposta03')

        if(nota < 6){
            resultado.textContent = 'Reprovado❌'
        }

        else if(nota < 7.9){
            resultado.textContent = 'Recuperacao ⚠️'
        }

        else if(nota > 8){
            resultado.textContent = 'Aprovado ✅'
        }
        else{
            resultado.textContent ='Resultado invalido'
        }
}


function questao04(){
    let cor = document.getElementById('cor').value
    let resultado
}
