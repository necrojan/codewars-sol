function maxGap(numbers) {
  let differenceArr = [];
  let sorted = numbers.sort((a, b) => b - a);
  
  for (let i = 0; i < sorted.length; i++) {
    if (i !== sorted[-1]) {
      let difference = sorted[i] - sorted[i + 1];
      differenceArr.push(difference);
    }
  }

  let filtered = differenceArr.filter((num) => {
    return !isNaN(num);
  });

  return Math.max(...filtered);
}

console.log(maxGap([13,10,2,9,5]))
console.log(maxGap([13,3,5]))
console.log(maxGap([24,299,131,14,26,25]))