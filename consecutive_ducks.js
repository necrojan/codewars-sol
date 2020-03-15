function consecutiveDucks(num) {
  if ((num & (num - 1)) && num) {
    return true;
  } else {
    return false;
  }
}

console.log(consecutiveDucks(9));
console.log(consecutiveDucks(64));
console.log(consecutiveDucks(42));
