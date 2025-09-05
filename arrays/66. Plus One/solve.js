 /**
 * @param {number[]} digits
 * @return {number[]}
 */

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var plusOne = function(digits) {
    //let numPlusOne = parseBig(digits.join("")) + 1
    let numPlusOne = BigInt(digits.join("")) + BigInt(1)
    return String(numPlusOne).split("").map(Number)
};
console.log(plusOne(digits))