// dem so luong gia tri co chu so cuoi la 5

a = [];
function bai220(a) {
    let count = 0
    for (let i = 0; i <= a.length; i++) {
        if(a[i] % 10 == 5) {
            count++;
        }
    }
    return count;
}
console.log(bai220([15, 25, 3, 3]))