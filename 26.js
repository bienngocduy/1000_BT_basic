//tinh tich uoc so le
function bai26(n) {
    let tich = 1;
    for (i = 1; i <= n; i++) {
        if ((n % i == 0) && (i % 2) != 0) {
            tich = tich * i;
        }
    }
    return tich;
}
console.log(bai26(9))