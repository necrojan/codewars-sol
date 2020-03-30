function whatCentury(year) {
  if (year <= 0) return '0 and negative is not allowed';
  
  const end = (num) => {
    let numStr = num.toString();
    let last = numStr.substr(-1);
    
    
    let notTh = ['1', '2', '3'];
    
    if (!notTh.includes(last) || num <= 20) {
      return num + 'th'
    } else if (last == 1) {
      return num + 'st';
    } else if (last == 2) {
      return num + 'nd';
    } else if (last == 3) {
      return num + 'rd';
    }
  }


  if (year <= 100) {
    return '1st century';
  } else if (year % 100 == 0) {
    return end(Math.floor(year / 100));
  } else {
    return end(Math.floor(year / 100 + 1));
  }
}

console.log(whatCentury(2001));
console.log(whatCentury(1234));
console.log(whatCentury(1023));
