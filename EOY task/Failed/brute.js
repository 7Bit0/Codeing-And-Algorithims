const fs = require('fs')

const writeStream = fs.createWriteStream('out.txt')
writeStream.write('5c,10c,20c,50c,$1,$2')

for (let a = 0; a <= 40; a++) {
    for (let b = 0; b <= 20; b++) {
        for (let c = 0; c <= 10; c++) {
            for (let d = 0; d <= 4; d++) {
                for (let e = 0; e <= 2; e++) {
                    if (((5 * a) +
                        (10 * b) +
                        (20 * c) +
                        (50 * d) +
                        (100 * e)) == 200) {
                        writeStream.write(`\n${a},${b},${c},${d},${e},0`)
                    }
                }
            }
        }
    }
}

writeStream.write('\n0,0,0,0,0,1')
writeStream.close()