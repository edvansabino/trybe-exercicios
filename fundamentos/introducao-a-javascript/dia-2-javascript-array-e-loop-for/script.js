let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

let sum = 0;
let mediaNumbers = 0;
let message = "";
let highestValue = 0;

/* for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
  mediaNumbers = sum / numbers.length;
}

if (mediaNumbers > 20) {
  message = "valor maior que 20.";
} else {
  message = "valor menor ou igual a 20.";
}

console.log(mediaNumbers);
console.log(message); */

for (let index = 0; index < numbers.length; index += 1) {
 if (highestValue < numbers[index]) {
  highestValue = numbers[index];
 }
}

console.log(highestValue);
