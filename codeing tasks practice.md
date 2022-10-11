# Task 1

```js
const list = [1, 5, 6, 8, 19, 20]

function numberOfOdds(list = [1, 5, 6, 8, 19, 20]) {
    return list.filter(t => t % 2 == 1).length
}

numberOfOdds(list)
```

# Task 2

```js
function sumOfOdds(max = 2) {
    var n = 0, i = 1;
    while (i < max) { n += (i += 2) }
}
```

# Task 3

```js
const max = Math.max
```

# Task 4

```js
function allTrinagleNumbersUpToN(n = 10) {
    var triangleNumbers = [1], i = 2, l = 1;

    do {
        l += i; triangleNumbers.push(l); i++;
    } while (l < n)

    return triangleNumbers
}

allTrinagleNumbersUpToN(10)
```

# Task 5

![](https://images.nightcafe.studio/users/LvuD6G4UbGWtm4gcAGRABzSii0D2/uploads/55byrYYC5gkLvd58ANK5.jpeg?tr=w-1600,c-at_max)
