# Roman to Integer

A simple JavaScript implementation that converts a Roman numeral string into an integer.

## 📖 Description
Roman numerals are represented by seven symbols:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

The algorithm iterates through the string:
- If the current numeral is **less than** the next one, it is **subtracted**.
- Otherwise, it is **added**.

This handles cases like:
- `IV = 4` (`5 - 1`)
- `IX = 9` (`10 - 1`)
- `MCMXCIV = 1994`
