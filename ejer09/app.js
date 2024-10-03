const texto = prompt("Introduce varias palabras: ");

function invertString(s = "texto por defecto") {
  return (
    Array.from(s.trim())
      //.split(" ")
      //.map((v) => (v === "" ? " " : v))
      .reduce((accum, current) => {
        if (accum.endsWith(" ") && current === " ") {
          return accum;
        } else {
          return accum.concat(current);
        }
      })
      .split(" ")
      .reverse()
      .join(" ")
  );
}

console.log(invertString(texto));
