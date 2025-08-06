/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    currentCount = 0;
    maxOnes = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "1"){
            currentCount++;
        }else {
            maxOnes = Math.max(currentCount, maxOnes);
            currentCount = 0;
        }
    }
    maxOnes = Math.max(currentCount, maxOnes);

    currentCountZero = 0;
    maxZeros = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "0"){
            currentCountZero++;
        }else {
            maxZeros = Math.max(currentCountZero, maxZeros);
            currentCountZero = 0;
        }
    }
    maxZeros = Math.max(currentCountZero, maxZeros);
    
    if(maxOnes < maxZeros || maxOnes == maxZeros) return false
    return true;  
};