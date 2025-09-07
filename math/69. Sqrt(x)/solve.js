/**
 * @param {number} x
 * @return {number}
 */
let x = 4;
var mySqrt = function (x) {
      if (x < 2) return x;

    let left = 0;
    let right = Math.floor(x / 2) 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid;
    
        if (mid * mid <= x){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return right;


};
console.log(mySqrt(x));