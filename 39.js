function bai39(n) {
    let i;
    let S;
    if (n < 1) {
        console.log("n phai >= 1");
    }
    while (n < 1);
    i = 1;
    S = 0;
    M = 1;
    while (i <= n) {
        M = M * i;
        S = Math.pow((M + S), 1 / (i + 1));
        i++;
    }
    return S;
}
console.log(bai39(3))
