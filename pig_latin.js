// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. 
// Leave punctuation marks untouched.
function pigIt(str){
  let word = str.split(' ');
  
  return word.map(ele => {
    // console.log(/[a-z]/i.test(ele));
    let regEx = /[a-z]/i.test(ele);
    let rest = ele.slice(1);
    let first = ele.slice(0, 1);

    if (!regEx) {
      return rest + first;
    } else {
      return rest + first + 'ay'
    }
  }).join(' ');
}

 // igPay atinlay siay oolcay
// console.log(pigIt('Pig latin is cool'));
// console.log(pigIt('Hello world !'));
console.log(pigIt('This is my string'));
