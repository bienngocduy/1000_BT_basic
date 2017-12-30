//tim gia tri duong dau tien trong mang

let a = [];
function bai135(a) {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > 0) {
            return a[i];
        }
    }
    return -1;
}
console.log(bai135([-5, -4, -7, -4, 100]))