const fs = require('fs')

var baseCoins = [
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
]

var coins = [
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
]

var basePossiableCoins = [10, 20, 50, 100]
var possiableCoins = [2, 4, 10, 20, 40]
var finalMap = []
var stateMap = [0]
var finalMapVal = 0

fs.writeFileSync('out.txt', 'All Possabel combonations of coins: \n')

while (true) {
    while (stateMap[0] < 5) {
        var arr = new Array(stateMap.map(t => basePossiableCoins[t]))
        var finalMapVal = stateMap.map(t => possiableCoins[t])
        var target = possiableCoins[stateMap[0]]

        let i = 40 - finalMapVal - target
        while (i--) {
            arr.push(5)
        }

        finalMap.push(basePossiableCoins[stateMap[0]])
        fs.appendFileSync('out.txt', arr.join(',') + '\n')
        stateMap[0]++
    }
    for (let p = 0; p < stateMap.length; p++) {
        if (stateMap[p] == 5) {
            if (!stateMap[p + 1]) { stateMap[p + 1] = 0 }
            stateMap[p] = 0
        } else {
            stateMap[p]++;
            break;
        }
    }
    if (stateMap[1] > 10) break
    if (finalMapVal == 40) break;
}


