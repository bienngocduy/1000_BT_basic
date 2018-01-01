//tinh tong các số có chữ số lẻ đầu tiên

function TimChuSoDauLe(n) {
    let unit;
    n = Math.abs(n);
    while (n >= 10) {
        unit = n % 10;
        n /= 10;
    }
    if (n % 2 == 0) {
        return 0;
    }
    return 1;
}
a = []
function bai202(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (TimChuSoDauLe(a[i]) == 1) {
            sum += a[i];
        }
    }
    return sum
}
console.log(bai202([31, 20, 15, 7]))