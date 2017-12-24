function bai70(x, n) {
    let S = 0;
    let P = 1;
    for (let i = 1; i <= n; i++) {
        P = P + i;
        S = S + Math.pow(-1, (1 + i)) / P;

    }
    return S;
}
console.log(bai70(2, 3))