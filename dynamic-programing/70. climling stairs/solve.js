/**
 * @param {number} n
 * @return {number}
 */

let n = 5;
var climbStairs = function(n) {
    return climb(n)
};

const memo = {}
function climb(n) {
    if (n <= 2) return n
    if (memo[n]) return memo[n]

    return memo[n] = climb(n - 1) + climb(n - 2)
}