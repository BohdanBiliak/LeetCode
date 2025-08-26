# Longest Substring Without Repeating Characters

## Problem
Given a string `s`, find the length of the **longest substring** without repeating characters.  
A **substring** is a contiguous block of characters.

### Example
Input: s = "abcabcbb"
Output: 3
Explanation: "abc" has length 3.

---

## Approach
- Use a **sliding window** with two pointers (`left`, `right`).
- Store the **last seen index** of each character in a hash map.
- If a duplicate appears inside the window → move `left` to `lastIndex + 1`.
- Update `maxLength` each step.

Time: **O(n)**, Space: **O(min(n, charset))**

---
