function bai17(x, n) {
    let i = 1;
    let T = 1;
    let S = 0;
    let M = 0;
    if (n < 1) { console.log("n phai >= 1") }
    while (n < 1);

    S = 0;
    T = 1;
    M = 1;
    i = 1;

    while (i <= n) {
        T = T * x;
        M = M * i;
        S = S + T / M;
        i++;
    }

    return S;
}
console.log(bai17(2, 3))