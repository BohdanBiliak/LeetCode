/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let nums = [3,2,2,3]
let val = 3

function removeElement(nums, val) {
    let i = 0;
    let j = nums.length;
    let temp;
    while (i < j){
        if(nums[i] === val && nums[j-1] !== val){
            temp = nums[j-1] 
            nums[j-1] = nums[i]
            nums[i] = temp
            j--;
            i++;
        }else if(nums[i] !== val){
            i++;
        }else{
            j--;
        }
    }
    return j;
}
console.log(removeElement(nums, val))