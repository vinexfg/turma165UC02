


// console.log('Bem vindo ao Back-end')

// function questao(){
//     let nome = prompt("Seu nome: ")
//     let idade = prompt("Sua idade: ")
//     let cidade= prompt("Sua cidade: ")

// console.log(`Seu nome: ${nome} e sua idade: ${idade} e sua cidade: ${cidade}`)
// alert (`Seu nome ${nome} e a sua idade ${idade} e sua cdiade: ${cidade}`)
// }

// questao()


// function questao2(){
//     let preco = prompt("Valor Produto: ")
//     let desconto = 0.20
//     let resultado = preco - (preco * desconto) 
    
   
//     alert(`Valor do Produto: ${preco} e com desconto ${resultado}`)
// }

// questao2()

// function questao3(){
//     let temperatura = prompt('Temperatura: ')
//     let convert = (temperatura * 9/5 ) + 32

//     alert(`Sua temperatura: ${temperatura}  e o seu resultado: ${convert}`)
// }

// questao3()

function questao4(){
    let base = Number(prompt('Base: '))
    let altura = Number(prompt('Altura: '))
    let area = base * altura
    let perimetro = (base + base) + (altura + altura)

    alert(`Base: ${base}   ALtura:${altura} Area: ${area} Perimetro: ${perimetro}`)
}




function questao5() {
    let ano_nascimento = Number(prompt('digite seu ano'))
    let ano = 2025
    let idade = (ano - ano_nascimento)

    alert(`Ano atual ${ano} Sua idade: ${idade} `)
}

questao5()