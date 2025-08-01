/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let shifter = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[shifter]){
            shifter += 1;
            nums[shifter] = nums[i];
        }
    }
    return (shifter+1);
};