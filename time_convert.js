// This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

// If the input is 0 or negative value, then you should return "00:00"

// Hint: use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division. For example the remainder of 5 / 2 is 1, so 5 modulo 2 is 1.

// If the input is 78, then you should return "01:18", because 78 minutes converts to 1 hour and 18 minutes.
function timeConvert(num) { 
    if (num <= 0) { return "00:00"; }
    
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    
    if (hours < 10) hours = String(hours).padStart(2, '0');
    if (minutes < 10) minutes = String(minutes).padStart(2, '0');
    
    return `${hours}:${minutes}`;
}