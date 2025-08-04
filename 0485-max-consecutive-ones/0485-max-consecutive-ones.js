/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    currentCount = 0;
    maxOnes = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            currentCount++;
            maxOnes = Math.max(currentCount, maxOnes);
        }else {
            currentCount = 0;
        }
    }
    return maxOnes;
};