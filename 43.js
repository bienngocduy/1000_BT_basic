//dem so luong chu so
function bai43(n) {
let dem = 0;
   // let themang;
    let sochuso;
    if (n == 0)
        sochuso = 1;
    while (n != 0) {
        sochuso = sochuso + 1;
        n = n / 10;
    }
    return dem;
}
console.log(bai43(144))