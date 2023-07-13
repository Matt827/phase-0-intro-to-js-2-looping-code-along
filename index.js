const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Wrapped ${arr[i]} and added a bow!`)
        debugger
    }

    return arr
}

// wrapGifts(gifts)

function writeCards(arr, eventName) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
        debugger
    }
    return newArr
}

writeCards(["Charlie", "Samip", "Ali"], "birthday")

function countDown(num) {
    for (let i = num; i >= 0; i--)
    console.log(i)
    debugger
}

countDown(10)