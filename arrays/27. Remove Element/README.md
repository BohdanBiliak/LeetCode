# 27. Remove Element

**Difficulty:** Easy  
**Topics:** Array, Two Pointers  

---

## Problem Statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**.  
The order of the elements may be changed.  

Return the number of elements in `nums` that are **not equal to** `val`.

---

### Requirements
- Modify `nums` such that the **first k elements** contain the values not equal to `val`.  
- The remaining elements beyond `k` do not matter.  
- Return `k` (the number of valid elements).  

---

### Example 1
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,,]
Explanation: k = 2, with first two elements equal to 2.

### Example 2
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,,,_]
Explanation: k = 5, valid elements can appear in any order.

---

### Constraints
- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

---

## Approach

We use the **two-pointer technique**:
- `i` scans the array from left to right.
- `j` represents the effective size of the array (shrinks when we remove a `val`).
- If `nums[i] == val`, replace it with `nums[j-1]` and decrease `j`.
- If `nums[i] != val`, just move `i` forward.
- Return `j` as the new length.

---
### Complexity
Time Complexity: O(n) (each element checked at most once)

Space Complexity: O(1) (in-place modification, no extra memory)