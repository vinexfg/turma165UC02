function calculo(tipo) {
  let X = Number(document.getElementById("valor1").value);
  let Y = Number(document.getElementById("valor2").value);
  let Z = Number(document.getElementById("valor3").value);
  let digito = document.getElementById("escrito");

  let resultado;

  switch (tipo) {
    case "aritmetica":
      resultado = (X + Y + Z) / 3;
      digito.innerText = `Média Aritmética: ${resultado.toFixed(2)}`;
      break;

    case "ponderada":
      resultado = (X * 3 + Y * 3 + Z * 4) / 10;
      digito.innerText = `Média Ponderada: ${resultado.toFixed(2)}`;
      break;

    case "geometrica":
      resultado = (X * Y * Z) ** (1 / 3);
      digito.innerText = `Média Geométrica: ${resultado.toFixed(2)}`;
      break;

    default:
      digito.innerText = "Opção inválida!";
      break;
  }
}
