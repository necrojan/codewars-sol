function twoOldestAges(ages){
  return ages.sort((a, b) => {
    return a - b;
  }).splice(-2, 2);
}

console.log(twoOldestAges([1, 2, 10, 8]));
