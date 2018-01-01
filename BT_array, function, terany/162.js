// tim vi tri co 2 gia tri lan can, va tich 2 gia tri lan can bang no

a = []
function bai162(a) {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] == a[i - 1] * a[i + 1]) {
            return i;
        }
    }
    return -1;
}
console.log(bai162([3, 6, 2]))