//dem so luong chu so
function bai43(n) {
    let dem;
    let t = n;
    while (t != 0) {
        dem = dem + 1;
        t = t / 10;
    }
    return dem;
}
console.log(bai43(14))