function solve(a, b) {
  return (a + b).split('').filter(letter => a.includes(letter) != b.includes(letter)).join('');
};

console.log(solve("xyab", "xzca"))
console.log(solve("xyabb", "xzca"))
console.log(solve("abcd", "xyz"))