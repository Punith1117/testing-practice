export let caesarCipher = (str, num) => {
    let strArr = str.split('');
    let resArr = []
    let charNum, resCharNum, charNumOfz, charNumOfZ, charNumOfa
    
    for (let character of strArr) {
        charNum = character.charCodeAt(0);
        resCharNum = charNum + num
        charNumOfa = 'a'.charCodeAt(0);
        charNumOfz = 'z'.charCodeAt(0);
        charNumOfZ = 'Z'.charCodeAt(0);

        if (resCharNum > charNumOfz) {
            resCharNum -= 26
        } else if (resCharNum > charNumOfZ && charNum < charNumOfa) {
            resCharNum -= 26
        }
        let char = String.fromCharCode(resCharNum)
        resArr.push(char);
    }
    
    return resArr.join('')
}