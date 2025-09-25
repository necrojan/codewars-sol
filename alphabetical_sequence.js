/**
 * In this kata you will be given a random string of letters and tasked with returning 
 * them as a string of comma-separated sequences sorted alphabetically, 
 * with each sequence starting with an uppercase character followed by n-1 lowercase characters, 
 * where n is the letter's alphabet position 1-26.
 */
function alphaSeq(str) {
    return str.toLowerCase().split('').sort().map((char) => {
        return char.toUpperCase() + char.repeat(char.charCodeAt() - 97);
    }).join(',');
}

console.log(alphaSeq('ZpglnRxqenU'));