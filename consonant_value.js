function solve(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  let arrStr = s.toLowerCase()
    .replace(/[aeiou]/g, ' ')
    .replace(/\s+/g, ' ');

    return Math.max(...arrStr.split(' ').map(value => {
      return value.split('')
        .map(v => alphabet.indexOf(v) + 1)
        .reduce((a, b) => a + b, 0);
    }));
};

console.log(solve('zodiac'));
console.log(solve('chruschtschov'));