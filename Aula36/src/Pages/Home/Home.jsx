import { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";


export default function Home(){
    const [nomeBusca, setNomeBusca] = useState("Pikachu");
    const [pokemon, setPokemon] = useState(null);
    const [erro, setErro]= useState("")

    useEffect(()=>{
        if(nomeBusca === ""){
            return
        }
        async function buscarPokemom() {
            try {
                const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeBusca.toLowerCase()}`)
                const dados = await resposta.json();
                console.log(dados)

            } catch (erro){
                setErro(erro.message);

            }
        }

        buscarPokemom()
    },[nomeBusca])


    return(
        <>
            <PokemonCard nome={nomeBusca} tipo="Fogo" imagem="texto" />
        </>
    )
}