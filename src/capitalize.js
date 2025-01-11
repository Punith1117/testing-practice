export let capitalizeFirstLetter = (str) => {
    let firstLetter = str.charAt(0);
    let res = str.replace(firstLetter, firstLetter.toUpperCase())
    return res;
}