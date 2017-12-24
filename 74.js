function bai74(x,n) {
    while (n < 1);

    let S = 1;
    let N = 1;
    let i = 1;
    let M;

    while (i <= n) {

        T = Math.pow(x, (2 * i + 1));
        M = i * 2 + 1;
        N = N * M * (M - 1);
        S = S + Math.pow(-1, (i + 1) * T / N);
        i++;
    }
    return S;
}
console.log(bai74(2,3))