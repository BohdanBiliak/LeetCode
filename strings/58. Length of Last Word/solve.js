/**
 * @param {string} s
 * @return {number}
 */

s = "Hello World"
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ")
    return `The last word is ${arr[arr.length - 1]} with length ${arr[arr.length - 1].length}.`
};
console.log(lengthOfLastWord(s))