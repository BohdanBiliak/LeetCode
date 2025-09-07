# 69. Sqrt(x)

**Difficulty:** Easy  
**Topics:** Binary Search, Math  

---

## Problem Statement

Given a non-negative integer `x`, return the **square root of `x` rounded down** to the nearest integer.  
The returned integer should be the **floor value** of `√x`.

- You must not use any built-in exponent function (`pow`, `sqrt`, etc.).  

---

### Example 1
Input: `x = 4`  
Output: `2`  
Explanation: The square root of 4 is 2, so return 2.  

### Example 2
Input: `x = 8`  
Output: `2`  
Explanation: The square root of 8 is 2.828..., and since we return only the integer part, the answer is 2.  

---

## Approach

1. Handle small cases: if `x < 2`, return `x`.  
2. Use **binary search** on the range `[0, x/2]` (because sqrt(x) is always ≤ x/2 for x ≥ 2).  
3. In each iteration:  
   - Compute `mid = floor((left + right) / 2)`.  
   - If `mid² == x`, return `mid`.  
   - If `mid² < x`, move `left` to `mid + 1`.  
   - If `mid² > x`, move `right` to `mid - 1`.  
4. When the loop ends, `right` will contain the integer floor of `√x`.  

---
