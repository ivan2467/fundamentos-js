let isla = "isla        azul";

if (isla.endsWith("  ")) console.log("true");
else console.log("false");

console.log(isla.split(" "));

let a = Array.from(isla)
  //.split(" ")
  //.map((v) => (v === "" ? " " : v))
  .reduce((accum, current) => {
    if (accum.endsWith(" ") && current === " ") {
      return accum;
    } else {
      return accum.concat(current);
    }
  });

console.log(a);

let b = isla.split(" ").map((v) => (v === "" ? " " : v));
console.log(b);
let current = "";
let previous = "";
let total = "";
for (let i = 0; i < b.length; i++) {
  current = b[i];

  if (previous === " " && current === " ") {
    previous = current;
  } else {
    total = total.concat(current);
    previous = current;
  }
}
console.log(total);
