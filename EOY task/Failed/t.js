var coins = [5, 10, 20, 50, 100, 200];
var target = 200;
var ways = 0;

var outPut = []

/**
 * @param {number} target 
 * @param {number[]} coins 
 */
function makeChange(target, coins, recLvL) {
    var coin = coins[0];
    var remainingCoins = coins.slice(1);
    for (var i = 0; i * coin <= target; i++) {
        var remaining = target - i * coin;
        if (remaining === 0) {
            outPut.push([coins, recLvL])
            ways++;
        } else if (remainingCoins.length > 0) {
            makeChange(remaining, remainingCoins, recLvL + 1);
        }
    }
}

makeChange(target, coins, 0);
console.log(outPut.sort(([, a], [, b]) => a - b).map(([a,b])=>`RecLVL: ${b}, Numbers: ${a.join(', ')}`).join('\n'));