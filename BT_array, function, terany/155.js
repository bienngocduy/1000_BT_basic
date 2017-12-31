// tim gia tri trong mang co khoang cach toi x lon nhat
a = []
function bai155(a, x) {
    max = a[0] - x;
    for (let i = 0; i <= a.length; i++) {
        if (a[i] - x > max)
            max = a[i]
    }
    return max
}
console.log(bai155([24, 45, 23,13,43, -12], 15))