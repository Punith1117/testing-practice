export let analyzeArray = (arr) => {
    let obj = {}
    let min

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            min = arr[i]
            continue
        }
        if (arr[i] < min)
            min = arr[i]
    }
    
    obj.min = min
    return obj
}