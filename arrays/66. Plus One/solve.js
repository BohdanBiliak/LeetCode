 /**
 * @param {number[]} digits
 * @return {number[]}
 */

let digits = [1,2,9]
var plusOne = function(digits) {
    //let numPlusOne = parseBig(digits.join("")) + 1
    let numPlusOne = BigInt(digits.join("")) + BigInt(1)
    return String(numPlusOne).split("").map(Number)
};
console.log(plusOne(digits))