import { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

export default function Home() {
  const [nomeBusca, setNomeBusca] = useState("pikachu");
  const [pokemon, setPokemon] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (nomeBusca === "") return;

    async function buscarPokemon() {
      try {
        console.log("Buscando:", nomeBusca);
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeBusca.toLowerCase()}`);
        if (!resposta.ok) throw new Error("Pokemon nao encontrado!");

        const dados = await resposta.json();
        console.log("Dados:", dados);
        setPokemon(dados);
        setErro("");
      } catch (erro) {
        setErro(erro.message);
        setPokemon(null);  
      }
    }

    buscarPokemon();
  }, [nomeBusca]);

  return (
    <div>
      <h1>Busca de Pokémon</h1>
      <input
        type="text"
        value={nomeBusca}
        onChange={(e) => setNomeBusca(e.target.value)}
        placeholder="Digite o nome do Pokémon"
      />

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {pokemon ? (
        <PokemonCard
          nome={pokemon.name}
          tipo={pokemon.types[0].type.name}
          imagem={pokemon.sprites.front_default}
        />
      ) : (
        !erro && <p>Carregando...</p>
      )}
    </div>
  );
}
