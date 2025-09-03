# 35. Search Insert Position

**Difficulty:** Easy  
**Topics:** Array, Binary Search  

---

## Problem Statement

Given a **sorted array of distinct integers** `nums` and a **target value** `target`, return the **index** if the target is found.  

If the target is **not found**, return the index where it **would be inserted** to keep the array sorted.

**Requirement:** Implement an algorithm with **O(log n) runtime complexity**.

---

### Example 1
Input: nums = [1,3,5,6], target = 5
Output: 2

### Example 2
Input: nums = [1,3,5,6], target = 2
Output: 1

### Example 3
Input: nums = [1,3,5,6], target = 7
Output: 4

---

## Approach

Since the array is **sorted**, we can use **binary search** to find the correct index efficiently:

1. Set two pointers: `left = 0` and `right = nums.length - 1`.  
2. While `left <= right`, compute `mid = Math.floor((left + right) / 2)`.  
3. Compare `nums[mid]` with `target`:  
   - If equal → return `mid`.  
   - If `nums[mid] < target` → move `left = mid + 1`.  
   - If `nums[mid] > target` → move `right = mid - 1`.  
4. If the target is not found, `left` will be the correct **insert position**.  

This ensures **O(log n) time complexity** and **O(1) space**.


