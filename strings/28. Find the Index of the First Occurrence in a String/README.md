# 28. Find the Index of the First Occurrence in a String

**Difficulty:** Easy  
**Topics:** String, Two Pointers, Sliding Window  

---

## Problem Statement

Given two strings `haystack` and `needle`, return the **index of the first occurrence** of `needle` in `haystack`.  
If `needle` is **not part** of `haystack`, return `-1`.

**Edge case:** If `needle` is an empty string, return `0`.

---

### Example 1
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0.

### Example 2
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" does not occur in "leetcode".

---

## Approach

1. Loop through `haystack` with an index `i` from `0` to `haystack.length - needle.length`.
2. Check if the substring of length `needle.length` starting at `i` matches `needle`.
3. If a match is found, return `i`.
4. If the loop ends without a match, return `-1`.

This is essentially a **sliding window** solution over the `haystack` string.

---
### Complexity

Time Complexity: O((n-m+1) * m) — n = haystack length, m = needle length

Space Complexity: O(1) if we ignore substring creation in slice