import { useState } from "react";

export default function Lampada() {
  const [luz, setLuz] = useState(false);

  return (
    <div>
      {
        luz
          ? <img src="ligada.jpg" alt="Lâmpada ligada" />
          : <img src="desligada.jpg" alt="Lâmpada desligada" />
      }

      <button onClick={() => setLuz(luz ? false: true)}>
        {luz ? "Apagar luz" : "Acender luz"}
      </button>
    </div>
  );
}
