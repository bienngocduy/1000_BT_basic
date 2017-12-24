function bai69(x, n) {
    let S = 0;
    let T = 1;
    for (let i = 0; i <= n; i++) {
        T = Math.pow(x, (2 * i + 1)) * Math.pow(-1, i);
        S = S + T;
    }
    return S;
}
console.log(bai69(2, 3))