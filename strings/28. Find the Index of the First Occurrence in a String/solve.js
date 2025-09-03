/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

let haystack = "sadbutsad"
let needle = "sadds"
var strStr = function(haystack, needle) {
    let i = 0;
    while(i <= haystack.length - needle.length){
        if(haystack.slice(i, i + needle.length) === needle){
            return i
        }else if(haystack.slice(i,i + needle.length) !== needle){
            i++;
        }
    }
    return -1

};
console.log(strStr(haystack, needle))