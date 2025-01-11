export let reverseString = (str) => {
    if (str == undefined) return null;
    if (typeof str !== 'string') return null;
    
    return str.split('').reverse().join(''); 
}