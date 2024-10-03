let texto = "case blanca con    techo azul";

let result = texto.split(" ").filter((v) => v !== "");

console.log(result);
console.log(result.length);
