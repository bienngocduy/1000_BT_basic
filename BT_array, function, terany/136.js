//tim gia tri chan cuoi cung trong mang

let a = [];
function bai136(a) {
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] % 2 == 0) {
            return a[i];
        }
    }
    return -1;
}
console.log(bai136([-5, -4, -7, 4, 100, 104]))