import Seaction from "../Seaction/Seaction";


export default function Main(){
    const lista = ['CARD 1', 'CARD 2', 'CARD 3', 'CARD 4']
    return(
        <>
        <main>{
            lista.map((i, index)=>(
                <Seaction key={index} elemento={i} />
            ))
        }</main>
        </>
    )
}