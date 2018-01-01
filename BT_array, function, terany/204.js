// tinh tong cac gia tri dung lien truoc no
a = []
function bai204() {
    let sum = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > a[i - 1]) {
            sum += a[i];
        }
    }
    return sum;
}
console.log(bai204([4, 14, 15, 19]))