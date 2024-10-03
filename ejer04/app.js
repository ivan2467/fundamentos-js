document.getElementById("subir").addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  let data = new FormData(form);
  const primero = Number.parseFloat(data.get("primer-numero"));
  const segundo = Number.parseFloat(data.get("segundo-numero"));
  document.writeln("Resultado: " + (primero + segundo));
});
