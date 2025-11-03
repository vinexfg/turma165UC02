import style from "./LightDark.module.css"
import { useState } from "react";

import { useState, useEffect } from "react";
import "./LightDark.css";

export default function LightDark() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    l
    const hour = new Date().getHours();

 
    const autoTheme = hour >= 6 && hour < 18 ? "light" : "dark";
    setTheme(autoTheme);


    document.body.setAttribute("data-theme", autoTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <div className="container">
        <h1>Modo {theme === "light" ? "Claro ☀️" : "Escuro 🌙"}</h1>
        <button onClick={toggleTheme}>
          Alternar para {theme === "light" ? "Modo Escuro" : "Modo Claro"}
        </button>
        <p>
          O tema muda automaticamente conforme o horário (das 6h às 18h → claro).
        </p>
      </div>
    </>
  );
}
