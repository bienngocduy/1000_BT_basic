// tim gia tri dau tien trong mang nam trong khoang (x,y) cho truoc

a = []
function bai161(a, x, y) {
    let dem = 0;
    let i = 0;
    for (i = 0; i <= a.length; i++) {
        if (a[i] >= x && a[i] <= y) {
            dem++;
            break;
        }
    }
    if (dem == 0) {
        return x;
    }
    return a[i];
}
console.log(bai161([4, 5, 7], 3, 8))