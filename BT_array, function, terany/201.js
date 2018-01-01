//tinh tong gia tri duong
a = []
function bai201(a) {
    let sum = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > 0) {
            sum += a[i];
        }
    }
    return sum;
}
console.log(bai201([1, 2, -1]))