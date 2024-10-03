const texto = "un murcielago pequeño";

let prev = "";
let biggest = "";
const a = texto.split(" ").forEach((v, i) => {
  if (v.length > prev.length) {
    biggest = v;
  }
  prev = v;
});

console.log(biggest);
