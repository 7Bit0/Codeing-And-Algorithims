const fs = require('fs')

var valMap = { 0: 0, 10: 2, 20: 4, 50: 10, 100: 20, 200: 40 }
var pozMap = { 0: 0, 10: 1, 20: 2, 50: 3, 100: 4, 200: 5 }
var pozMapR = { 0: 0, 1: 10, 2: 20, 3: 50, 4: 100, 5: 200 }
var coins = []
fs.writeFileSync('out.txt', '')

var additinalCoins = [0]
var crntCoinCount = 40
while (true) {
    crntCoinCount = 40 - additinalCoins.reduce((a, b) => valMap[a] + valMap[b], 0)
    for (const coin in valMap) {
        coins = []
        let i = crntCoinCount - valMap[coin]
        if (i < 0) break;
        while (i--) { coins.push(5) }
        coins.push(coin, ...additinalCoins)
        fs.appendFileSync('out.txt', coins.join(',') + '\n')
    }
    for (let p = 0; p < additinalCoins.length; p++) {
        if (pozMap[additinalCoins[p]] == 5) {
            if (!additinalCoins[p + 1]) { additinalCoins[p + 1] = 0 }
            additinalCoins[p] = 0
        } else {
            additinalCoins[p] = pozMapR[pozMap[additinalCoins[p]] + 1] ?? 0;
            break;
        }
    }
    console.log(additinalCoins)
}
