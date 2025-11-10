import { useState } from "react"


export default function AlertaHidratacao(nome = ''){
    const [copos, setCopos] = useState(0)

    const adicionarCopo = () =>{
        setCopos(copos + 1)
    }
    return(
        <>
        <button></button>
        </>
    )
}


// import { useState } from "react";

//  export default function ControleAgua({  nome = '' }) {
//   const [copos, setCopos] = useState(0);

//   const adicionarCopo = () => {
//     setCopos(copos + 1);
//   };

//   return (
//     <div >
//       <h2>Olá, {nome}!</h2>
//       <p>Você já bebeu <strong>{copos}</strong> copo{copos !== 1 ? "s" : ""} de água hoje 💧</p>
//       <button onClick={adicionarCopo}>
//         +1 Copo
//       </button>
//     </div>
//   );
// }