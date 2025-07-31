/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let original = x
    let rev = 0;

    if(x < 0){
        return false;
    }
    while (x > 0){
        rem = x % 10;
        x = Math.floor(x/10);
        rev = (rev * 10) + rem
    }
    return rev == original;
};