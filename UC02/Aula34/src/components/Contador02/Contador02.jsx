import { useState, useEffect } from "react";
import Contador from "../Contador/Contador";

export default function Contador02(){
    const [contador , setContador] = useState(0)

    
useEffect(()=>{
    document.title = `Contador: ${contador}`;
},[contador])

    return (
        <>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}> 
                Incrementar
            </button>



        </>
    )
}