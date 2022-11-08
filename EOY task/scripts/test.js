const fs = require('fs')

var correctCases = fs.readFileSync('out.csv')
    .toString('ascii')
    .split('\n')
correctCases.splice(0, 1)
correctCases = correctCases.map(t => t.split(','))
    .map(([c5, c10, c20, c50, d1, d2]) => ({
        5: Number(c5),
        10: Number(c10),
        20: Number(c20),
        50: Number(c50),
        100: Number(d1),
        200: Number(d2),
    }));

var results = fs.readFileSync('out.txt')
    .toString('ascii')
    .split('\n')
results.splice(0, 1)
results = results.map(t => t.split(','))
    .map(([c5, c10, c20, c50, d1, d2]) => ({
        5: Number(c5),
        10: Number(c10),
        20: Number(c20),
        50: Number(c50),
        100: Number(d1),
        200: Number(d2),
    }));

var correctResults = results.filter(t => Object.entries(t).reduce((a, [k, v]) => a + (Number(k) * v), 0) == 200)
var invalidResults = results.filter(t => !Object.entries(t).reduce((a, [k, v]) => a + (Number(k) * v), 0) == 200)
console.log(`PASSED CASES: ${correctResults.length}`)
console.log(`FAILED CASES: ${results.length - correctResults.length}`)
console.log(`MISSING CASES: ${293 - correctResults.length}`)

function objToString(obj) {
    return `\n${obj["5"]},${obj["10"]},${obj["20"]},${obj["50"]},${obj["100"]},${obj["200"]}`
}

fs.writeFileSync('missed.csv', '5c,10c,20c,50c,$1,$2\n' + correctCases.filter(t => !results.some(n => JSON.stringify(t) == JSON.stringify(n))).map(objToString).join(''))
