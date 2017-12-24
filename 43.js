//dem so luong chu so
function bai43(n) {
    let dem = 0;
    
    while (n > 0) {
       let i = n % 10;
        dem++;
        n = n / 10;
    }
    return dem;
}
console.log(bai43(144))