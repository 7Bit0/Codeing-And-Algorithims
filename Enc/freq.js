const fs = require('fs')

var recoChars = 'abcdefghijklmenopqrstuvwxyz'

var letters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    e: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
}
var dataIn = fs.readFileSync('freqin.txt', { encoding: 'ascii' })

for (var i of Array.from(dataIn.toLowerCase()).filter(t => recoChars.includes(t))) letters[i]++;

for (i in letters) {
    console.log(`${i}: ${''.padEnd(letters[i], 'x')}`)
}