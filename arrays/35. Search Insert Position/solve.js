/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1,3,5,6]
let target = 0

var searchInsert = function(nums, target) {
    let i = 0;
    for(i; i < nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.length;
};
console.log(searchInsert(nums, target))