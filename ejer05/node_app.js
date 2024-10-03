import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin,
});

rl.question("Introduce un número: ", (num) => {
  esParOImpar(num);
  rl.close();
});

function esParOImpar(num) {
  if (num % 2 === 0) {
    //document.writeln(`${num} es un número par`);
    console.log(`${num} es un número par.`);
  } else {
    //document.writeln(`${num} es un número impar`);
    console.log(`${num} es un número impar.`);
  }
}
