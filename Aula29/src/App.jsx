import Card from "./components/Card/Card";

export default function App() {

  let info = ["React", "CSS", "Componentes", "Hooks"];

  return (
    <>
      <h1>React</h1>
      <p>Teste</p>


      <Card conteudo="Aula de React + CSS" />

   
      {info.map((i, index) => (
        <Card key={index} conteudo={i} />
      ))}
    </>
  );
}
