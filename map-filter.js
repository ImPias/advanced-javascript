const numbers = [2, 3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i] * numbers[i];
//     output.push(element);
// }
// console.log(output);

// Map
// function square(element){
//     return element * element;
// }
// const result = numbers.map(square);
// console.log(result);
// const result = numbers.map(function(element){
//     return element * element;
// });
// console.log(result);
// const square  = element => element * element;
// const result = numbers.map(square);
// console.log(result);
const result = numbers.map(element => element * element);
console.log(result);

// Filter (Filter return array)
const result2 = numbers.filter(element => element > 5);
console.log(result2);

// Find (Find single value)
const result3 = numbers.find(element => element < 5);
console.log(result3);