export let capitalizeFirstLetter = (str) => {
    if (str === undefined) return null;

    let firstLetter = str.charAt(0);
    let res = str.replace(firstLetter, firstLetter.toUpperCase())
    return res;
}