// tim gia tri dau tien lon hon 2003
a = [];
function bai159(a) {
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > 2003) {
            return a[i];
        }
    }
    return 0;
}
console.log(bai159([12, 14, 2004, 2005]))