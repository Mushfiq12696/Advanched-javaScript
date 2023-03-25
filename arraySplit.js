const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const part1 = numbers.slice(3, 9);

const removed = numbers.splice(2, 2, 10, 11, 12)

// console.log(removed);
// console.log(numbers);

const together = numbers.join(",");
console.log(together);