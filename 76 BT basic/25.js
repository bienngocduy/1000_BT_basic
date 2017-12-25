//tinh tong uoc so chan
function bai25(n) {
    let tong = 0;
    for (i = 1; i <= n; i++) {
        if ((n % i == 0) && (i % 2) == 0) {
            tong = tong + i;
        }
    }
    return tong;
}
console.log(bai25(8))