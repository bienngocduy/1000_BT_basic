//dem so lan xuat hien x

a = [];
function bai219(a, x) {
    let count = 0
    for (let i = 0; i <= a.length; i++) {
        if (a[i] == x) {
            count++;
        }
    }
    return count;
}
console.log(bai219([1, 2, 3, 3], 3))