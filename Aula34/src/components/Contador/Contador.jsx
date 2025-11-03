import { useState, useEffect } from "react";

export default function Contador(){
    const [tempo, setTempo]= useState(0);
    const [pausar, setPausar]= useState(0)

    useEffect(() =>{ 
        if(!pausar) return
        const intervalo = setInterval(()=>{
            setTempo(tempo + 1)
        },1000);
        return () => clearInterval(intervalo)
    }, [pausar, tempo])

    return(
        <>
            <h2>🕰️ Tempo: {tempo}</h2>
            <button onClick={()=> setPausar(!pausar)}>
                {pausar ? "Pausar" : "Retomar" }

            </button>
        </>
    )
}


