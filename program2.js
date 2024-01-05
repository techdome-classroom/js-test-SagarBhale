/**
 * @param {string} s
 * @return {number}
 */


var romanToInt = function(s) {
    // Define a map for Roman numeral values
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Iterate through each character in the string
    for (let i = s.length - 1; i >= 0; i--) {
        let currentValue = romanValues[s[i]];

        // If the current value is less than the previous value,
        // we need to subtract it, otherwise add it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        
        // Update the previous value for the next iteration
        prevValue = currentValue;
    }

    return total;
};


module.exports={romanToInt}
