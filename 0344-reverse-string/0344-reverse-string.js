/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length === 0){
        return s
    }
    let n = s.length;
    for(let i = 0; i < n/2; i++){
        let temp = s[n-1-i];
        s[n-1-i] = s[i];
        s[i] = temp;
    }
    return s;
};
