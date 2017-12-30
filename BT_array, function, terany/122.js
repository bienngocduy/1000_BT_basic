//tim gia tri lon nhat trong mang 1 chieu 
let a = [];
function bai122(a) {
    max_value = a[0];
    for (let i = 0; i <= a.length; i++) {
        if (a[i] > max_value) {
            max_value = a[i]
        }
    }
    return max_value;
}
console.log(bai122([1, 2, 3, 4, 100]))