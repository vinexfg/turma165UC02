import React, { useState, useEffect } from "react";
import styles from "./LightDark.module.css";

export default function LightDark() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add(styles.darkBody);
    } else {
      body.classList.remove(styles.darkBody);
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div>
      <h1 className={darkMode ? styles.darkHeading : ""}>Modo dark / light</h1>
      <div
        id="trilho"
        className={`${styles.trilho} ${darkMode ? styles.darkTrilho : ""}`}
        onClick={toggleMode}
      >
        <div
          className={`${styles.indicador} ${
            darkMode ? styles.darkIndicador : ""
          }`}
        ></div>
      </div>
    </div>
  );
}
