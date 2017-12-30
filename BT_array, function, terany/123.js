//tim vi tri cua gia tri nho nhat trong mang 1 chieu 
let a = [];
function bai123(a) {
    min_value_position = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] < a[min_value_position]) {
            min_value_position = i
        }
    }
    return min_value_position;
}
console.log(bai123([5, 4, 7, 4, 100]))