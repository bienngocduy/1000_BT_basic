function bai73(x, n) {
    let S = 0;
    //let P = 1;
    let T = 1;
    let M = 1;
    let N = 1;
    for (let i = 1; i <= n; i++) {
        T = Math.pow(x, (2 * i));
        M = i * 2;
        N = N * M * (M - 1);
        S = S + Math.pow(-1, i) * T / N;
    }
    return S;
}
console.log(bai73(2, 3))