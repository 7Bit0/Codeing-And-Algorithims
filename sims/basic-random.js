const fs = require('fs')

function rollDice() {
    return Math.floor(Math.random() * 8)
}

var stats = {
    dicea: [0, 0, 0, 0, 0, 0, 0, 0],
    diceb: [0, 0, 0, 0, 0, 0, 0, 0],
    total: [
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ]
}

for (let i = 0; i < 1_000; i++) {
    var rolla = rollDice()
    var rollb = rollDice()

    stats.dicea[rolla]++
    stats.diceb[rollb]++

    stats.total[rolla + rollb]++
}

fs.writeFileSync('out.json', JSON.stringify(stats))