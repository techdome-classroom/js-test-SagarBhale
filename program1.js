/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
    let stack = [];
    const bracketsArray = {
      '{':'}',
      '[':']',
      '(':')'
    }
    for(i=0; i < data[0].length; i++) {
        if (s[0][i] == '{' || s[0][i] == '(' || s[0][i] == '[') {
            stack.push(s[0][i]);
        } else if (s[0][i] == '}' || s[0][i] == ']' || s[0][i] == ')') {
            if (bracketsArray[stack[stack.length-1]] ==s[0][i]) {
              stack.pop()
            }
        }  
    }
    
    if (stack.length == 0) {
      return true
    } else {
      return false
    }
};

module.exports = { isValid };

