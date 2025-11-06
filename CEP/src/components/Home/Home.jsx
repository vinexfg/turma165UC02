import style from "./Home.module.css"
import { useState } from "react";
import CepInput from "../../components/CepInput/CepInput";
import CepCard from "../../components/CepCard/CepCard";
import styles from "./Home.module.css";

export default function Home() {
  const [cepBusca, setCepBusca] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscarCep() {
    if (cepBusca.trim() === "") return;
    try {
      setCarregando(true);
      setErro("");
      setEndereco(null);

      const resposta = await fetch(`https://viacep.com.br/ws/${cepBusca}/json/`);
      const dados = await resposta.json();

      if (dados.erro) throw new Error("CEP não encontrado!");
      setEndereco(dados);
    } catch (erro) {
      setErro(erro.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Busca de CEP</h1>

      <CepInput cepBusca={cepBusca} setCepBusca={setCepBusca} onBuscar={buscarCep} />

      {carregando && <p className={styles.loading}>Carregando...</p>}
      {erro && <p className={styles.error}>{erro}</p>}
      {endereco && <CepCard endereco={endereco} />}
    </div>
  );
}
