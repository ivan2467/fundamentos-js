document.getElementById("subir").addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  let data = new FormData(form);
  const numero = Number.parseInt(data.get("numero"));

  let result = checkNumIsEven(numero) ? "par" : "impar";
  document.getElementById(
    "result"
  ).innerText = `${numero} es un número ${result}.`;
});

function checkNumIsEven(num) {
  return num % 2 === 0;
}
