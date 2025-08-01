/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let totalLength = nums.length;
    let uniqueArray = [...new Set(nums)].length;
    if(totalLength == uniqueArray){
        return false
    }
    return true
};