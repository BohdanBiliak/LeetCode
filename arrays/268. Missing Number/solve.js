nums = [3,0,1]

function missingNumber2(nums) {
    let expectedSum = (nums.length * (nums.length+1)) / 2
    let actualSum = 0
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    return excpectedSum - actualSum
}
console.log(missingNumber2(nums))