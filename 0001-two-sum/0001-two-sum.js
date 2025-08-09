/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let complement = target - nums[i];
        if (complement in hash) {
            return [hash[complement], i];
        }else {
            hash[nums[i]] = i;
            }
    }
    return [];
};