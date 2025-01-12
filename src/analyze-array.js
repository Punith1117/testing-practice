export let analyzeArray = (arr) => {
    let obj = {}
    let min, max

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            min = arr[i]
            max = arr[i]
            continue
        }

        if (arr[i] < min)
            min = arr[i]

        if (arr[i] > max)
            max = arr[i]
    }

    obj.min = min
    obj.max = max
    return obj
}