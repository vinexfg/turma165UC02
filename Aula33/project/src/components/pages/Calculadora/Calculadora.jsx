import style from "./Calculadora.module.css"
import { useState } from "react"
import Input from "../../Input/Input"
import Button from "../../Button/Button"


export default  function Calculadora(){
    const[num1, setNum] = useState("");
    const[num2, setNum2] = useState("");
    const[resultado, setResultado] = useState("");

    function calcular(op){
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if(isNaN(n1) || isNaN(n2)){
            setResultado("Digite Valores validos!!!");
            return;
        }
        switch(op){
            case "+":
                setResultado(n1 + n2);
                break
            case "-":
                setResultado(n1 - n2);
                break
            case "*":
                setResultado(n1 * n2);
                break;
            case "/":
                setResultado(n2===0 ? "Err: Divisao por Zero" : n1/n2);
                break;
            default                             
        }
    }
    return(
        <>
            <h1>Page calculadora</h1>
            <div>
                <Input
                label= "Numero 01"
                value={num1}
                onChange={(e)=> setNum(e.target.value)}
                placeholder= "Numero 01"
                />

                <Input
                label= "Numero 02"
                value={num2}
                onChange={(e)=> setNum2(e.target.value)}
                placeholder= "Numero 02"
                />
                <div>
                    <Button label="+" onClick={somar} type="success" />
                    <Button label="-" onClick={subtrair} type="warning" />
                    <Button label="×" onClick={multiplicar} type="info" />
                    <Button label="÷" onClick={dividir} type="danger" />
                </div>
                <p>Resultado: {resultado}</p>
            </div>


        </>
    )
}