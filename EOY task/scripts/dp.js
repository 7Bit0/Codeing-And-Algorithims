let dp = [1] // number of ways to make i cents
let coins = [5, 10, 20, 50, 100, 200]
for (let i = 1; i <= 200; i++) {
    dp.push(0)
    for (let c of coins) {
        if (i - c >= 0) dp[i] += dp[i - c]
    }
}

console.log(dp.filter((t, i) => (t != 0) && coins.includes(i)))