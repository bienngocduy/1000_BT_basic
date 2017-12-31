//tim vi tri gia tri nho nhat trong mang

let a = [];
function bai136(a) {
    let min_value_position = 0;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] < a[min_value_position]) {
            min_value_position = i
        }
    }
    return min_value_position;
}
console.log(bai136([-5, -4, -7, 4, 100, 104]))