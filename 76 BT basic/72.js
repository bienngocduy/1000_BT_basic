function bai72(x, n) {
    let S = 0;
    let P = 1;
    let T = 1;
    let M = 1;
    for (let i = 1; i <= n; i++) {
        T = T * x;
        M = M * i;
        S = S + Math.pow(-1, i) * T / M;
    }
    return S;
}
console.log(bai72(2, 3))