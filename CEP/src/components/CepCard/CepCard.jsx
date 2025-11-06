
import styles from "./CepCard.module.css";

export default function CepCard({ endereco }) {
  return (
    <div className={styles.card}>
      <p><strong>CEP:</strong> {endereco.cep}</p>
      <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
      <p><strong>Bairro:</strong> {endereco.bairro}</p>
      <p><strong>Cidade:</strong> {endereco.localidade} - {endereco.uf}</p>
    </div>
  );
}
