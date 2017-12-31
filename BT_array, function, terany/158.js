// tim [-x,x] chua tat ca gia tri trong mang
a = []
function bai157(a) {
    x = a[0];
    for (let i = 0; i <= a.length; i++) {
        x = x > Math.abs(a[i]) ?  x  :  Math.abs(a[i]);
    }
    console.log(x)
}
bai157([1, 2, 3, 4, 100])