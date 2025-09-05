/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let a = "11"
let b = "1"
var addBinary = function (a, b) {
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`)
    return sum.toString(2)

};
console.log(addBinary(a, b))