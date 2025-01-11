export let reverseString = (str) => {
    if (str == undefined) return null;
    
    return str.split('').reverse().join(''); 
}