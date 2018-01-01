// tính tổng các giá trị lớn hợn trị tuyệt đối của giá trị liền sau nó

a =[]
function bai205() {
    let sum = 0;
    for(let i = 0; i <= a.length; i++) {
        if (a[i] > Math.abs(a[i + 1])) {
            sum += a[i];
        }
    }
    return sum;
}
console.log(bai205([7, -5, -4]))