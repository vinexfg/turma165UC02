import { useState } from "react"

export default function Lampada(){

    const [ligado, setLigado] = useState(0);
    return(
        <>

            <div>
                <button>Desligar</button>
                {/* <button onClick={()=> setLigado(setLigado == true ? setLigado == false: )} */}
                <img src="https://img.freepik.com/vetores-gratis/lampada-realistica-isolada-de-vetor-sobre-branco_1284-41931.jpg?semt=ais_hybrid&w=740&q=80" alt="Lampada acessa" />

            </div>
        </>
    )
}