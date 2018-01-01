// kiem tra mang co ton tai gia tri  0 

a = [];
function bai240(a) {
    let flag = 0; 
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 0) {
            flag = 1;
        }
    }
    return flag;
}
console.log(bai240([15, 25, 3, 3, 0]))