// tim gia tri trong mang co khoang cach toi x nho nhat
a = []
b = parseFloat(a)
function bai156(b, x) {
    min = parseFloat(b[0] - x);
    for (let i = 0; i <= b.length; i++) {
        let c = parseFloat(b[i] - x)
        if (c < min)
            min = b[i]
    }
    return min
}
console.log(bai156([24, 45, 23,13,43,-12], 15))