import Livro from "./Livro";
import styles from "./List.module.css";

export default function List({ livros }) {
  return (
    <div className={styles.container}>
      {livros.map((livro, index) => (
        <Livro
          key={index}
          titulo={livro.titulo}
          autor={livro.autor}
          ano={livro.ano}
          genero={livro.genero}
          capa={livro.capa}
          disponivel={livro.disponivel}
          badge={livro.badge}
        >
          {livro.children}
        </Livro>
      ))}
    </div>
  );
}
