/**
 * There are some stones on Bob's table in a row, and each of them can be red, green or blue, 
 * indicated by the characters R, G, and B.
 * Help Bob find the minimum number of stones he needs to remove from the table so 
 * that the stones in each pair of adjacent stones have different colors.
 * Examples:
 * "RGBRGBRGGB"   => 1
 * "RGGRGBBRGRR"  => 3
 * "RRRRGGGGBBBB" => 9
 */
function solve(stones) {
    let dropped = 0;

    let chars = stones.split('');

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] == chars[i+1]) {
            dropped++;
        } 
    }

    return dropped;
}

console.log(stonesOnTable('RGBRGBRGGB'));
console.log(stonesOnTable('RGGRGBBRGRR'));
console.log(stonesOnTable('RRRRGGGGBBBB'));