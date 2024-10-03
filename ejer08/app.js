function azar(min = -5, max = 10) {
  return Number.parseInt((Math.random() * (max - min) + min).toFixed());
}
const num = azar();
console.log(num);
console.log(num + 1);

let array = new Array(10);
array.fill(7);

for (let i = 0; i < 10; i++) {
  console.log(azar());
}

//array[3] = 5;
console.log(array);
