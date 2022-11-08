const fs = require("fs");

var outPut = []

/**
 * @param {number} target 
 * @param {number[]} coins 
 */
function getNumbs(target, coins, crntList = { 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 200: 0 }) {
    var coin = coins[0];
    var remainingCoins = coins.slice(1);
    for (var i = 0; (i * coin) <= target; i++) {
        var remaining = target - (i * coin);
        var out = Object.create(crntList)
        out[coin] = i
        if (remaining === 0) {
            console.log(out, remainingCoins, remaining, i, target)
            outPut.push(crntList)
        } else if (remainingCoins.length > 0) {
            getNumbs(remaining, remainingCoins, out);
        }
    }
}

getNumbs(200, [5, 10, 20, 50, 100, 200])

function objToString(obj) {
    return `\n${obj["5"]},${obj["10"]},${obj["20"]},${obj["50"]},${obj["100"]},${obj["200"]}`
}

fs.writeFileSync('out.txt', '5c,10c,20c,50c,$1,$2' + outPut.map(objToString).join(''))