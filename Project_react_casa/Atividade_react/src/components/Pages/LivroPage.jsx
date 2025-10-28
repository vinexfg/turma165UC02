import React from "react";
import List from "./List";

function LivroPage() {
  const livros = [
    {
      titulo: "O Senhor dos Anéis",
      autor: "J. R. R. Tolkien",
      ano: 1954,
      genero: "Fantasia",
      capa: "/imagens/capa-senhor-dos-aneis.jpg",
      disponivel: true,
      badge: "Novo",
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      ano: 1949,
      genero: "Distopia",
      capa: "/imagens/capa-1984.jpg",
      disponivel: false,
    },
  ];

  return (
    <div className="catalogo-container">
      <h1>📚 Catálogo de Livros</h1>
      <p>Confira alguns títulos incríveis da nossa biblioteca!</p>
      <List livros={livros} />
    </div>
  );
}

export default LivroPage;
