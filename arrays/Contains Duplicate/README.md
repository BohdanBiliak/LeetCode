# 217. Contains Duplicate

## Problem
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and `false` if every element is distinct.

## Examples
```text
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
Constraints

1 <= nums.length <= 10^5

-10^9 <= nums[i] <= 10^9

Solution Approach

HashSet Approach:

Initialize an empty set.

For each element in nums:

If it exists in the set → return true.

Otherwise, add it to the set.

If no duplicates → return false.

Time Complexity: O(n)
Space Complexity: O(n)