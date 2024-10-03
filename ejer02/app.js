let lista = [];

for (let i = 0; i < 100; i++) {
  lista[i] = Number.parseInt((Math.random() * 100).toFixed(0));
}

console.table(lista);

console.table(lista.slice(40, 70));
