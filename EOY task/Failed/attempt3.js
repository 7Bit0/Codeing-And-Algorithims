const fs = require('fs')

fs.writeFileSync('out.txt', '5c,10c,20c,50c,$1,$2')

var coins = [200]

/**
 * @param {number} coin 
 */
function splitCoin(coin) {
    switch (coin) {
        case 200:
            return [100, 100]
        case 100:
            return [50, 50]
        case 50:
            return [20, 20, 10]
        case 20:
            return [10, 10]
        case 10:
            return [5, 5]
    }
}

/**
 * 
 * @param {{ 5: number, 10: number, 20: number, 50: number, 100: number, 200: number }} obj 
 */
function objToString(obj) {
    return `\n${obj["5"]},${obj["10"]},${obj["20"]},${obj["50"]},${obj["100"]},${obj["200"]}`
}

while (true) {
    fs.appendFileSync('out.txt', objToString(coins.reduce((c, p) => { c[p.toString()]++; return c }, {
        "5": 0,
        "10": 0,
        "20": 0,
        "50": 0,
        "100": 0,
        "200": 0
    })))
    if (coins.length == 40) break;
    var coin = coins.splice(coins.findIndex(t => t != 5), 1)[0]
    coins.unshift(...splitCoin(coin))
}