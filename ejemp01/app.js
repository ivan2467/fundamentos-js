//document.writeln("Hola mundo");
console.log("Hola desde la consola!");
//window.alert("Hola");

//let nombre = prompt("Introduce tu nombre: ");
let nombre = "Ana";
//document.writeln(`Hola, ${nombre}`);

const result = document.getElementById("result");
result.innerText = `Hola ${nombre}`;

const persona = {
  nombre: "Ana",
  apellidos: "Flores",
  edad: 30,
  isTrabajando: true,
  altura: 165,
};

console.log(persona);
console.table(persona);
