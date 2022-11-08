var arr = [0]

for (let i = 0; i < 14; i++) {
    for (let n = 0; n < arr.length; n++) {
        if (arr[n] == 6) {
            if (!arr[n + 1]) { arr[n + 1] = 0 }
            arr[n] = 0
        } else {
            arr[n]++;
            break;
        }
    }
    console.log(arr)
}