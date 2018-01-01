// tinh tong cac phan tu trong mang
a = []
function bai200(a) {
    let sum = 0;
    for (let i = 0; i <= a.length; i++) {
        sum += a[i];
    }
    return sum;
}
console.log(bai200([1, 2, 3, 4]))
