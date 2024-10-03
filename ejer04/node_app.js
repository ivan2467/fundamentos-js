import * as readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Indroduce dos números");

const a = parseInt(await rl.question("Primer número: "));
const b = parseInt(await rl.question("Segundo número: "));

console.log(`Resultado: ${a + b}`);
rl.close();
