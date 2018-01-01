// dem gia tri doi xung
function KiemTraDoiXung(n) {
    let dv = 0;
    let daonguoc = 0;
    let tam = n;
    while (tam > 0) {
        dv = tam % 10;
        tam /= 10;
        daonguoc = daonguoc * 10 + dv;
    }
    if (daonguoc == n) {
        return 1;
    }
    return 0;
}
a = []
function bai218(a) {
    let count = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] < 0) {
            break;
        }
        if (KiemTraDoiXung(a[i]) == 1) {
            count++;
        }
    }
    return count;
}
console.log(bai218(7, 3, 7, 4, 353))