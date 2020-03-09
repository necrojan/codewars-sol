function capitalize(s){
  let arrOfChars =  s.split('');

  let lFirst = arrOfChars.map((ele, idx) => {
    if (idx % 2 != 0) {
      return ele.toUpperCase();
    } else {
      return ele;
    }
  }).join('');
  let ufirst = arrOfChars.map((ele, idx) => {
    if (idx % 2 != 0) {
      return ele.toLowerCase();
    } else {
      return ele.toUpperCase();
    }
  }).join('');
  return [ufirst, lFirst]
};

console.log(capitalize('codewars'));