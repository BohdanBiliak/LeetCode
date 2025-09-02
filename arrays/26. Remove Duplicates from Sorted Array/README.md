# 📌 Remove Duplicates from Sorted Array

This repository explains the solution for **LeetCode Problem 26 — Remove Duplicates from Sorted Array**.  

---

## 📝 Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once.  

- The relative order of elements must be preserved.  
- The function should return the number of unique elements `k`.  
- The first `k` elements of `nums` must contain the unique elements.  
- The remaining elements are not important (they can be ignored).  

---

## ✅ Examples

### Example 1
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation:  
`k = 2`, because the first two unique elements are `[1, 2]`.  
Underscores (`_`) represent unused values beyond the returned length.  

---

### Example 2
Explanation:  
`k = 5`, because the first five unique elements are `[0, 1, 2, 3, 4]`.  

---

## 💡 Approach — Two Pointers

We solve this problem efficiently using the **two pointers technique**:

1. Use two indices:  
   - `i` → tracks the position of the last unique element.  
   - `j` → scans through the array.  

2. Compare `nums[i]` with `nums[j]`.  
   - If they are **different**, it means `nums[j]` is a new unique element.  
   - Move `i` forward and copy `nums[j]` into that position.  

3. Continue until the end of the array.  
4. The number of unique elements is `i + 1`.  

---

## 🔬 Example Walkthrough

For input:  
nums = [1, 1, 2, 2, 3]

Step-by-step:  

- Start: `i = 0`, `j = 1`  
- Compare `nums[0] = 1` with `nums[1] = 1` → duplicate, skip  
- `j = 2`, compare `nums[0] = 1` with `nums[2] = 2` → new unique → move `i` to 1, set `nums[1] = 2`  
- `j = 3`, compare `nums[1] = 2` with `nums[3] = 2` → duplicate, skip  
- `j = 4`, compare `nums[1] = 2` with `nums[4] = 3` → new unique → move `i` to 2, set `nums[2] = 3`  

Final result:  
nums = [1, 2, 3, _, _]
k = 3
---

## 📊 Complexity Analysis

- **Time Complexity:** `O(n)` → We only traverse the array once.  
- **Space Complexity:** `O(1)` → No extra data structures are used; everything is done in-place.  

---
