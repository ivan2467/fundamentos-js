import * as readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const word = await rl.question("Introduce una palabra: ");
rl.close();

let vocals = "aeiouAEIOUáéíóúÁÉÍÓÚ";
let nVocals = 0;

for (let letter of word) {
  if (vocals.includes(letter)) {
    nVocals++;
  }
}
console.log(`${word} tiene ${nVocals} vocales.`);
