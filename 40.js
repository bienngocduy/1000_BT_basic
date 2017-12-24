function bai40(x, n) {
    let i = 1;
    let S = 0;
    let T = 1;

    if (x < 0) { console.log("x khong hop le") }

    while (x < 0) { if (n < 1) { console.log("x khong hop le") } }
    while (n < 1) {
        while (i <= n) {
            T = T * x;
            S = Math.sqrt(T + S);
            i++;
        }
    }
    return S;
}
console.log(bai40(4, 3))
