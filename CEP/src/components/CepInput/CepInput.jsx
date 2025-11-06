import styles from "./CepInput.module.css";

export default function CepInput({ cepBusca, setCepBusca, onBuscar }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={cepBusca}
        onChange={(e) => setCepBusca(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onBuscar()}
        placeholder="Digite o CEP (ex: 01001000)"
        maxLength={8}
        className={styles.input}
      />
      <button onClick={onBuscar} className={styles.button}>
        Buscar
      </button>
    </div>
  );
}
