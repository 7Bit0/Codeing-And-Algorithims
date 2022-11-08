const fs = require('fs')
var objects = [
    { 200: 1 }
]

function objToString(obj) {
    return `\n${obj["5"] ?? 0},${obj["10"] ?? 0},${obj["20"] ?? 0},${obj["50"] ?? 0},${obj["100"] ?? 0},${obj["200"] ?? 0}`
}

/**
 * 
 * @param {number} target the number we are generateing ractors for
 * @param {number[]} numbers the numbers that can be used to attempt to reach the target
 * @param {NodeJS.Dict<number>} set The set containg the ammount of each coin
 */
function getNumbs(target, numbers, set) {
    var coin = numbers[0] // The coin we have selected to fill the array with
    var remainingCoins = numbers.slice(1) // The remaining coins to fill the array with

    for (let i = 0; (i * coin) <= target; i++) {
        var remaining = target - (coin * i)
        if (remaining < 0) { break }
        var coinSet = Object.assign({}, set)
        coinSet[coin] = i

        if (remaining === 0) {
            objects.push(coinSet)
        } else if (remainingCoins.length > 0) {
            getNumbs(remaining, remainingCoins, coinSet)
        }
    }
}

getNumbs(200, [5, 10, 20, 50, 100, 200])

fs.writeFileSync('out.txt', '5c,10c,20c,50c,$1,$2\n' + objects.map(objToString).join(''))