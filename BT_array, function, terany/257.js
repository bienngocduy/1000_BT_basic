
function HoanVi(a, b) {
    let temp = a;
    a = b;
    b = temp;
}
a = []
function bai257(a) {
    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] % 2 != 0) {
            for (let j = i + 1; j < a.length; j++)
            {
                if (a[j] % 2 != 0 && a[i] > a[j]) {
                    HoanVi(a[i], a[j]);
                }
            }
        }
    }
}
console.log(bai257([1,2,3,4]))