// import Botao from "./components/Botao/Botao"
// import Saudacao from "./components/Saudacao/saudacao"

import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/header"



function App() {

  return (
    <>
      <Header />
      <Card  Pergunta='Explique com suas palvaras o que e um Componente no React' />
      <Card Resposta='Em poucas palavras, um componente no React é como um pequeno pedaço de um quebra-cabeça que forma a interface visual de uma aplicação' />

      <Card Pergunta={'Qual a funcao do arquvio APP.jsx em um projeto react ?'}/>
      <Card Resposta={'Em um projeto React, o arquivo App.jsx serve como o componente raiz ou principal da aplicação'}/>

      <Card Pergunta={'Descreva o papel do arquivo main.jsx  o que ele faz em relacao ao html'}/>
      <Card Resposta={'O arquivo main.jsx serve como o ponto de entrada principal de uma aplicação React'} />

      <Card Pergunta={'O ciclo de vida de um componente React pode ser divido em 3 fases.'}/>
      <Card Resposta={'1- fase (1. Montagem (Mounting) 2-(Updating)  3- Desmontagem (Unmounting)'} />

      <Footer />
    </>

  )
}


export default App



