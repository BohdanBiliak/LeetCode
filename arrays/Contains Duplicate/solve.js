nums = [1,1,1,3,3,4,3,2,4,2]
function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length
};
console.log(containsDuplicate(nums))