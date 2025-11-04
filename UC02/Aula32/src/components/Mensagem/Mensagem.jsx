import { useState } from "react";

export default function Mensagem(){
    const [mensagem, setMensagem] =useState('Ola! ');

    return(
        <>
            <h2>{mensagem}</h2>
            <input
             type="text"
             placeholder="Digite uma mensagem"
             onChange={(e) => setMensagem(e.target.value.length == 0 ? "Macaco Prego" : e.target.value)}
             
             
              />
        </>
    )
}