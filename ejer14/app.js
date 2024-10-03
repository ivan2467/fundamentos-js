let word = "saas";
let reversed = word.split("").reverse().join("");

if (word === reversed) console.log(`${word} es un palíndromo.`);
else console.log(`${word} no es un palíndromo.`);
