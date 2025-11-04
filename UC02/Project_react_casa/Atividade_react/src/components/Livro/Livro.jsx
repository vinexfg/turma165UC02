import styles from "./Livro.module.css";

export default function Livro({
  titulo,
  autor,
  ano,
  genero,
  capa,
  disponivel = true,
  badge,
  children,
}) {
  return (
    <div className={`${styles.card} ${!disponivel ? styles.indisponivel : ""}`}>
      <img src="`/imagens/${capa}`" alt={titulo} className={styles.capa} />

      <h3>{titulo}</h3>
      <p>
        {autor} — {ano}
      </p>
      <p>
        <b>Gênero:</b> {genero}
      </p>

      {children && <div className={styles.extra}>{children}</div>}
    </div>
  );
}
