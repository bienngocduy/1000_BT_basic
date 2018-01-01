//tính tong các số có chữ số hàng chục là 5

function TimSoHangChuc5(n) {
    n = Math.abs(n);
    n = n / 10;
    let hangchuc = n % 10;
    if (hangchuc == 5) {
        return 1;
    }
    return 0;
}
a = []

function bai203(a) {
    let sum = 0;
    for (let i = 0; i <= a.length; i++) {
        if (TimSoHangChuc5(a[i]) == 1) {
            sum += a[i];
        }
    }
    return sum
}
console.log(bai203([35, 20, 15, 7]))