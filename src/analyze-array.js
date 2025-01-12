export let analyzeArray = (arr) => {
    let obj = {}
    let min, max, sum = 0, average = 0
    let arrLen = arr.length

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
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
    obj.average = Math.round((sum/arrLen) * 100) / 100
    return obj
}