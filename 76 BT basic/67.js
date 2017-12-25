function bai67(x, n) {
    let S = 0;
    let T = 1;
    for (let i = 1; i <= n; i++) {
        T = T * x;
        S = S + T;
    }
    return S;
}
console.log(bai67(2, 3))