function maxProduct(numbers, size) {
  let sorted = numbers.sort((a, b) => b - a);
  let products = [];

  for (let i = 0; i < size; i++) {
    products.push(sorted[i]);
  }

  return products.reduce((acc, curVal) => acc * curVal);
}

console.log(maxProduct([4,3,5], 2))
console.log(maxProduct([10,8,7,9], 3))
console.log(maxProduct([8,6,4,6], 3))