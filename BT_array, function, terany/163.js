function KiemTraChinhPhuong(n) {

}
a = []
function bai163(a) {
    for (let i = 0; i < a.length; i++) {
        if (KiemTraChinhPhuong(a[i]) == 1) {
            return a[i];
        }
    }
    return -1;
}
console.log(bai163([3, 4, 9]))