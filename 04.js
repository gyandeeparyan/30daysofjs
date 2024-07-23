for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 X ${i} = ${5 * i}`);
}

// Star Patttern

for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    console.log("*");
  }
}

// Sum using while loop

let sum = 0;
let l = 1;
while (i <= 10) {
  sum += l;
  l++;
}
console.log(sum);

// factorial
let num = 5;
let factorial = 1;
let x = 1;

do {
  factorial *= x;
  x++;
} while (x <= num);

console.log(factorial);

