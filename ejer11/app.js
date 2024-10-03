let generated_nums = [];
let num_count = [];

for (let i = 0; i < 10; i++) {
  num_count.push(0);
}

function azar(min = 1, max = 10) {
  return Math.round(Math.random() * (max - min) + min);
}

function wait(x) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(console.log(x));
    }, 2000)
  );
}

for (let i = 0; i < 100; i++) {
  let x = azar();
  generated_nums.push(generated_nums);
  num_count[x - 1]++;
}

let r;
num_count.forEach((v, i) => {
  r = r + `${i}: ${v}, `;
});
console.log(r);
