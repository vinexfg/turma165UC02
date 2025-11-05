import { useEffect, useState } from "react";
import style from "./Veiculo.module.css"



export default function Veiculo(){
    const [ligado, setLigado] = useState(false);
    const [velocidade, setVelocidade] = useState(0);
    const[combustivel, setCombustivel]= useState(100);

    useEffect(()=>{
        if(ligado){
            console.log(`velocidade atual: ${velocidade} km/h`);
            if(velocidade === 100){
                alert(" Cuidado! Alta velocidade")
            }
        }
    },[velocidade, ligado])

    useEffect(()=>{
        if(ligado){
            console.log("O carro foi ligado!")
        }else{
            console.log("O carro foi desligado")
            setVelocidade(0);
            alert(" o carro foi desligado")
        }
    },[ligado]);

    function ligarDesligar(){
        if(!ligado && combustivel <=0){
            alert('Sem cobustivel!  Abasteca antes de ligar' );
            return;
        }
        setLigado(!ligado)
    }

    function Acelerar(){
        if (!ligado){
            return;
        }
        if(combustivel > 0){
            setVelocidade(velocidade + 10);
            setCombustivel(Math.max(combustivel - 5, 0));
        } else {
            alert(" Acabou o combustobvel!")
            setLigado(false);
        }
    }

    function frear(){
        if (!ligado) return;

        if(velocidade > 0){
           setVelocidade(velocidade - 10);
           setCombustivel(Math.min(combustivel + 1, 100)); 
        }
    }

    return(
        <>
            <div className={style.painel}>
                <h2>Painel do veiculo</h2>
                <p><strong>Status:</strong> {ligado ? "Ligado": "Desligado"}</p>
            </div>
        </>
    )
}