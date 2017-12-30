//tinh tong gia tri am trong mang

let a = [];
function bai126(a) {
    sum_negative_value = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] < 0) {
            sum_negative_value += a[i]
        }
    }
    return sum_negative_value;
}
console.log(bai126([5, -4, -7, 4, 100]))