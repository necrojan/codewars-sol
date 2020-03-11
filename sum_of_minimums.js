function sumOfMinimums(arr) {
  return arr.map(row => {
    return Math.min(...row)
  }).reduce((acc, curVal) => acc + curVal);
}

console.log(sumOfMinimums([
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]));