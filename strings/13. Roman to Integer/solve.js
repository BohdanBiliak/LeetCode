/**
 * @param {string} s
 * @return {number}
 */
s = "MCMXCIV"
var romanToInt = function(s) {
    let result = 0
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    for (let i = 0; i < s.length; i++) {
        const current = map.get(s[i])
        const next = map.get(s[i + 1])

        if (next && current < next) {
            result  -= current
        }else{
            result += current
        }
    }
    return result
    
};
console.log(romanToInt(s))