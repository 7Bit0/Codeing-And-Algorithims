const fs = require("fs")

var trials = []

var max = 100
var trialLength = 50
var trialSize = 10_000


function genNumber() {
    return Math.floor(Math.random() * max)
}

for (let i = 0; i < trialLength; i++) {
    trials[i] = new Array(max).fill(0)

    for (let n = 0; n < trialSize; n++) {
        trials[i][genNumber()]++;
    }
}


fs.writeFileSync('out.csv', `trial,${new Array(max).fill(0).map((_, i) => i).join(',')}\n`)
fs.appendFileSync('out.csv', trials.map((t,i) => `${i},${t.join(',')}`).join('\n'))