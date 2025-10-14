// function valores(){
//     let X = document.getElementById('valor1').value
//     let Y = document.getElementById('valor2').value
//     let Z = document.getElementById('valor3').value
// }

function calculo1(){
    let X = parseFloat(document.getElementById('valor1')).value
    let Y = parseFloat(document.getElementById('valor2')).value
    let Z = parseFloat(document.getElementById('valor3')).value
    let digito = document.getElementById('escrito')

    let resultado = (X + Y + Z)
    alert(resultado)
    digito.textContent(`Resultado: ${resultado}`)
}









//     }    switch (X, Y, Z) {
//         case value:
            
//             break;
    
//         default:
//             break;
// }