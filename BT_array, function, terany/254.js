// dem so luong trong mang lon hon tat ca gia tri dung truoc no

a = [];
function bai254(a) {
    let flag = 1;
    let count = 0;
    let i;
    for (let j = 0; j < i; j++) {
        if (a[i] < a[j] || a[i] == a[j]) {
            flag = 0;
        }
    }
    if (flag == 1) {
        count++;
    }
    return count;
}

console.log(bai254([0, 15, 25, 3, 3]))