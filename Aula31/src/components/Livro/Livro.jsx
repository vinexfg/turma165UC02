export default function Livro({titulo, autor, ano, genero, capa, disponivel, badge, children= "Nehnuma informacao a mais disponivel"}){
    return(
        <>
            <div>
                <img src={capa} alt= {titulo} />
                <h2>{titulo}</h2>
                <p>Autor: {autor}</p>
                <p>Ano: {ano}</p>
                <p>Genero: {genero}</p>
                <p>{badge}</p>
                {disponivel ? <p>Disponivel</p> : <p>Indisponivel</p>}
                {children}
            </div>
        </>
    )
}