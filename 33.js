function bai33(n) {
    let i;
    let S;
    if (n < 1) {
        console.log("n phai >= 1");
    }
    while (n < 1);

    S = Math.sqrt(2);
    for (i = 2; i <= n; i++) {
        S = Math.sqrt(2 + S);
    }
    return S;
}
console.log(bai33(2))
