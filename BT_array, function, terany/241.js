// kiem tra mang co ton tai 2 gia tri  0 lien tiep  

a = [];
function bai241(a) {
    let flag = 0; 
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 0 && a[i + 1] == 0) {
            flag = 1;
        }
    }
    return flag;
}
console.log(bai241([0,15, 25, 3, 3,0]))