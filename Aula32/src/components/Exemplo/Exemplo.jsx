 import { useState } from "react";
import style from "./Exemplo.module.css"

 export default function Exemplo(){
    const [valor, setValor] = useState(0);

    return(
        <>  
            <p>O valor atual e: {valor}</p>
            <button onClick={()=> setValor(valor + 1)}>Aumentar</button>
            <button onClick={()=> setValor(valor > 0 ? valor - 1: valor - 0)}>Diminui</button>
            <button onClick={()=> setValor(valor - valor)}>Zerar</button>
            <img src="https://media.istockphoto.com/id/93214254/pt/foto/macaco-vervet-chlorocebus-pygerythrus.jpg?s=612x612&w=0&k=20&c=NNQuCjZQWVCszqhsaPZ6gkD3A-5mtOPN4T6b6NQ3s0M=" alt="" />
            <img src="https://s2-g1.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg" alt="macaco prego" />
        </>
    )
 }