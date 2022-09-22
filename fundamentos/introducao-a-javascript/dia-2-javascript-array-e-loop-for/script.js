let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

let sum = 0;
let mediaNumbers = 0;
let message = "";

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
  mediaNumbers = sum / numbers.length;
}

if (mediaNumbers > 20) {
  message = "valor maior que 20.";
} else {
  message = "valor menor ou igual a 20.";
}

console.log(mediaNumbers);
console.log(message);
