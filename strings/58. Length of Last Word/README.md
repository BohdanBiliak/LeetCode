# 58. Length of Last Word

**Difficulty:** Easy  
**Topics:** String  

---

## Problem Statement

Given a string `s` consisting of words and spaces, return the **length of the last word** in the string.  
A word is defined as a maximal substring consisting of **non-space characters only**.

---

### Example 1
Input: s = "Hello World"  
Output: 5  
Explanation: The last word is "World" with length 5.

### Example 2
Input: s = "   fly me   to   the moon  "  
Output: 4  
Explanation: The last word is "moon" with length 4.

### Example 3
Input: s = "luffy is still joyboy"  
Output: 6  
Explanation: The last word is "joyboy" with length 6.

---

## Approach

1. Use `trim()` to remove trailing and leading spaces.  
2. Split the string by spaces into an array of words.  
3. Return the length of the last word (last element in the array).  

Alternative optimized approach (without `split`):  
- Traverse the string backwards, skipping trailing spaces.  
- Count characters until another space is found or the start of the string is reached.  

---

### Complexity

- **Time Complexity:** O(n) (where n = length of the string)  
- **Space Complexity:** O(1) for the two-pointer approach, O(n) if using `split`  
