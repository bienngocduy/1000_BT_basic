// tim gia tri am cuoi cung lon hon -1
a = [];
function bai160(a) {
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] > -1 && a[i] < 0) {
            return a[i];
        }
    }
    return 0;
}
console.log(bai160([12, 14, 2004, 2005, -0.5, -0.6]))