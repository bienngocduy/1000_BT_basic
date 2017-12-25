function bai68(x, n) {
    let S = 0;
    let T = 1;
    for (let i = 1; i <= n; i++) {
        T = (Math.pow(x, (2 * i))) * (Math.pow(-1, i));
        S = S + T;
    }
    return S;
}
console.log(bai68(2, 3))