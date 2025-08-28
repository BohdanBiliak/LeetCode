strs = ["flower","flow","flight"]

function longestCommonPrefix(strs) {
    let prefix = strs[0]
    for (let i of strs.slice(1)){
        while(!i.startsWith(prefix)){
            prefix = prefix.slice(0, -1);
            if(!prefix) return ""
        }
    }    
    return prefix
};
console.log(longestCommonPrefix(strs))