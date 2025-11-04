
function Saudacao(){
    let Hora = Number(prompt("que horas Sao agora 0 a 23"))
    let mensagem = ""

    if (Hora <= 11 ){
        mensagem = 'Bom dia'
    }

    else if (Hora <= 17){
        mensagem = 'Boa Tarde'
    }

    else if (Hora <=  23){
        mensagem = 'Boa noite'
    }
    else {
        mensagem = "mensagem Invalida"
    }
    document.getElementById('saudacao').innerText = mensagem
}