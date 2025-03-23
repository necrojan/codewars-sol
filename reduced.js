/**
 * Write a function that takes in an array of integers from 0-9, 
 * and returns a new array:
 * 
 * Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
 * Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
 */

const setReducer = (input) => {
    if (input.length == 1) return input[0];

    const reduced = input.reduce((count, num, idx) => {
        if (idx === 0 || num !== input[idx-1]) {
            count.push(1);
        } else {
            count[count.length-1]++
        }
    }, []);

    return setReducer(reduced);
}

const arr = [0, 4, 6, 8, 8, 8, 5, 5, 7]

console.log(setReducer(arr));
