function bai36(n) {
    let i;
    let S;
    if (n < 1) {
        console.log("n phai >= 1");
    }
    while (n < 1);
    i = 1;
    M = 1;
    S = Math.sqrt(0);

    while (i <= n) {
        M = M * i;
        S = Math.sqrt(M + S);
        i++;
    }
    return S;
}
console.log(bai36(3))
