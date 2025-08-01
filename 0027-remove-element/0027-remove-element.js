/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let pointR = 0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] != val){
            nums[pointR] = nums[i]
            pointR += 1
        }
    }
    return pointR
};