# 67. Add Binary

**Difficulty:** Easy  
**Topics:** String, Math, Binary  

---

## Problem Statement

Given two binary strings `a` and `b`, return their **sum** as a binary string.  
Both `a` and `b` consist only of `'0'` or `'1'` characters.

---

### Example 1
Input: a = "11", b = "1"  
Output: "100"  
Explanation: 3 + 1 = 4 in decimal, which is "100" in binary.

### Example 2
Input: a = "1010", b = "1011"  
Output: "10101"  
Explanation: 10 + 11 = 21 in decimal, which is "10101" in binary.

---

## Approach

**Using BigInt (simple and concise):**

1. Convert the binary strings to `BigInt` using the `0b` prefix.  
2. Add the two `BigInt` numbers.  
3. Convert the sum back to a binary string using `.toString(2)`.  

```javascript
var addBinary = function (a, b) {
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    return sum.toString(2);
};
