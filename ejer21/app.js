const numbers = [82, 33, 309, 55, 120, 278];

function rmLowerNumThan(min) {
  return numbers.filter((n) => n > min);
}

console.log(rmLowerNumThan(100));
